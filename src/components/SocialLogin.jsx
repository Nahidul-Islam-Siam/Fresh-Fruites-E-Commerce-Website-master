import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SocialLogin() {
  return (
     <div className="flex gap-4 mt-2 justify-center">
          <button className="flex items-center gap-2 border  text-lg border-gray-300 p-2 text-[#212337] font-semibold rounded-md w-full justify-center hover:bg-gray-100">
            <FcGoogle className="text-2xl" /> Google
          </button>
          <button className="flex items-center gap-2 border border-gray-300 p-2 rounded-md w-full text-[#212337] text-lg font-semibold justify-center hover:bg-gray-100">
            <FaFacebook className="text-blue-600 text-2xl" /> Facebook
          </button>
        </div>
  )
}
