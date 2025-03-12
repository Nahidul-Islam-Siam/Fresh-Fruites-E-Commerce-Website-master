"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { FiX } from "react-icons/fi"; // Import the "X" close icon from react-icons

export function AuthModal() {
  const [isLogin, setIsLogin] = useState(true); // state to toggle between Login and Sign Up

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-200 border border-gray-300 hover:bg-gray-300 text-black px-4 py-2 rounded-md text-sm font-medium">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-6 bg-white shadow-lg rounded-lg">
        <DialogHeader className="relative">
          {/* Close Icon */}
          <DialogClose asChild>
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              <FiX className="text-2xl" />
            </button>
          </DialogClose>
          <DialogTitle className="text-center text-3xl font-semibold text-[#212337]">
            {isLogin ? "Login" : "Register"}
          </DialogTitle>
        </DialogHeader>
        {/* Toggle between Login and SignUp forms */}
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="mt-4 text-center text-sm text-[#212337]">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-[#FF6A1A] hover:underline"
                onClick={() => setIsLogin(false)} // Switch to Sign Up form
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-[#FF6A1A] hover:underline"
                onClick={() => setIsLogin(true)} // Switch to Login form
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
