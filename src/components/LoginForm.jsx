"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SocialLogin from "./SocialLogin";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Login Data:", data);
    alert("Login successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required", minLength: 6 })}
          className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
        />
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
        >
          Login
        </Button>
      </div>

      <div className="mt-4 text-center text-gray-500">or continue with</div>
      <SocialLogin />
    </form>
  );
}
