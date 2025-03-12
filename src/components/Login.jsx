"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-200 border border-gray-300 hover:bg-gray-300 text-black px-4 py-2 rounded-md text-sm font-medium">
          Sign In
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-6 bg-white shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-semibold text-[#212337]">Login</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-[#212337] text-lg">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                           className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-[#212337] text-lg">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" /> Remember me
            </label>
            <button className="text-blue-500 hover:underline">Forgot Password?</button>
          </div>
        </div>
        <div className="mt-4">
          <Button className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-blue-700">Login</Button>
        </div>
        <div className="mt-4 text-center text-gray-500">or continue with</div>
        <div className="flex gap-4 mt-2 justify-center">
          <button className="flex items-center gap-2 border  text-lg border-gray-300 p-2 text-[#212337] font-semibold rounded-md w-full justify-center hover:bg-gray-100">
            <FcGoogle className="text-2xl" /> Google
          </button>
          <button className="flex items-center gap-2 border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg font-semibold justify-center hover:bg-gray-100">
            <FaFacebook className="text-blue-600 text-2xl" /> Facebook
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-[#212337]">
          Don't have an account? <button className="text-[#FF6A1A] hover:underline">Sign Up</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}