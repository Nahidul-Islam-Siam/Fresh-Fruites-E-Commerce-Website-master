"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { FiX } from "react-icons/fi"; 
import { useSelector } from "react-redux"; 
import { selectCurrentUser } from "@/redux/feature/authSlices/authSlices"; 

export function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false); 
  const user = useSelector(selectCurrentUser); 

  useEffect(() => {
    if (!user) {
      setOpen(true); 
    }
  }, [user]);

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className=" border border-gray-300 hover:bg-gray-300 text-black hover:text-black px-4 py-2 rounded-md text-sm font-medium">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-6 bg-white shadow-lg rounded-lg">
        <DialogHeader className="relative">
          <DialogClose asChild>
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              <FiX className="text-2xl" />
            </button>
          </DialogClose>
          <DialogTitle className="text-center text-3xl font-semibold text-[#212337]">
            {isLogin ? "Login" : "Register"}
          </DialogTitle>
        </DialogHeader>

        {isLogin ? (
          <LoginForm closeModal={handleCloseModal} />
        ) : (
          <SignUpForm switchToLogin={handleSwitchToLogin} />
        )}

        <div className="mt-4 text-center text-sm text-[#212337]">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button className="text-[#FF6A1A] hover:underline" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="text-[#FF6A1A] hover:underline" onClick={() => setIsLogin(true)}>
                Sign In
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
