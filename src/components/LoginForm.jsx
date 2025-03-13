"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogin from "./SocialLogin";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { toast } from "react-toastify"; 
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/feature/authSlices/authSlices";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

export function LoginForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    try {
      const response = await login({ email: data.email, password: data.password }).unwrap();
      console.log("Login successful:", response);
      toast.success("Login successful!");

      if (response.success && response.data.token) {
        dispatch(setUser({ user: response.data.user, token: response.data.token }));

        if (rememberMe) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user)); 
          
          
          closeModal();
          router.refresh(); 
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="text-[#212337] text-lg">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <Label htmlFor="password" className="text-[#212337] text-lg">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", { required: "Password is required", minLength: 6 })}
            className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg pr-10"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 text-gray-600 hover:text-black"
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>
        <button className="text-blue-500 hover:underline">Forgot Password?</button>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <Button
          type="submit"
          className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </div>

      {/* Social Login */}
      <div className="mt-4 text-center text-gray-500">or continue with</div>
      <SocialLogin />
    </form>
  );
}
