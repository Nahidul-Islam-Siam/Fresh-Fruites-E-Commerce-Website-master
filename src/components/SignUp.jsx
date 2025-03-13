"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignupMutation } from "@/redux/api/auth/authApi"; // Adjust import
import { toast } from "react-toastify";

export function SignUpForm({ switchToLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signup, { isLoading }] = useSignupMutation();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data).unwrap();
      console.log("Registration successful:", response);
      toast.success("Registration successful! Please log in.");

      // Switch to login form after successful signup
      switchToLogin();
      
    } catch (err) {
      console.error("Registration failed:", err);
      toast.error(err?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-[#212337] text-lg">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
          className="border border-gray-300 p-2 rounded-md w-full text-lg"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-[#212337] text-lg">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className="border border-gray-300 p-2 rounded-md w-full text-lg"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="password" className="text-[#212337] text-lg">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required", minLength: 6 })}
          className="border border-gray-300 p-2 rounded-md w-full text-lg"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div className="mt-4">
        <Button type="submit" className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600" disabled={isLoading}>
          {isLoading ? "Registering..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
