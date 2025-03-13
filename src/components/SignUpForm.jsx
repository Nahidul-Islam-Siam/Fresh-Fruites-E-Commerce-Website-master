"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogin from "./SocialLogin";
import { useSignupMutation } from "@/redux/api/auth/authApi";
import { useDispatch } from "react-redux"; // Import dispatch
import { setUser } from "@/redux/feature/authSlices/authSlices";


export function SignUpForm({ switchToLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signup, { isLoading, error }] = useSignupMutation();

  const dispatch = useDispatch(); // Initialize dispatch

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const onSubmit = async (data) => {
    const formattedData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await signup(formattedData).unwrap();
      console.log("Registration successful!", res);
      toast.success("User registered successfully");

      if (res.success && res.data) {
        // Dispatch user info to Redux store
        dispatch(setUser({ user: res.data.fullName || "generated_token_here" }));

        // Store user and token in localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify({ user: res.data }));
        
        }

        // Switch to the login form
        switchToLogin();
      }
    } catch (err) {
      console.error("Registration failed:", err);
      toast.error(err?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="fullName" className="text-[#212337] text-lg">
          Name
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your name"
          {...register("fullName", { required: "Name is required" })}
          className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-[#212337] text-lg">
          Email
        </Label>
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

      <div>
        <Label htmlFor="password" className="text-[#212337] text-lg">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
            })}
            className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-2 text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-blue-500" /> Remember me
        </label>
        <button className="text-blue-500 hover:underline">Forgot Password?</button>
      </div>

      <div className="mt-4">
        <Button
          type="submit"
          className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </div>

      {error && <p className="text-red-500 text-sm">{error?.data?.message || "Signup failed. Please try again."}</p>}

      <div className="mt-4 text-center text-gray-500">or continue with</div>
      <SocialLogin />
    </form>
  );
}
