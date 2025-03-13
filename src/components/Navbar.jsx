'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'; 
import { Button } from './ui/button';
import { AuthModal } from './AuthModal';
import { Avatar } from './AvatarDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); 

  // Use Redux to get the current user
  const user = useSelector((state) => state.auth.user);
  
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path) => router.pathname === path ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600 hover:text-gray-900';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src='/assets/Logo.svg'
                    alt="Fresh Harvests"
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link href="/" passHref>
              <span className={`px-3 py-2 rounded-md text-sm text-[#4A4A52]  font-medium ${isActive('/')}`}>
                Home
              </span>
            </Link>
            <Link href="/shop" passHref>
              <span className={`px-3 py-2 rounded-md text-sm text-[#4A4A52] font-medium ${isActive('/shop')}`}>
                Shop
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className={`px-3 py-2 rounded-md  text-[#4A4A52]  text-sm font-medium ${isActive('/about')}`}>
                About
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className={`px-3 py-2 rounded-md text-sm text-[#4A4A52]  font-medium ${isActive('/blog')}`}>
                Blog
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="mr-2 text-sm font-medium">Favorite</span>
              <FaHeart className="h-6 w-6" />
            </button>

            <Link href="/cart" passHref>
              <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
                <span className="mr-2 text-sm font-medium">Cart</span>
                <FaShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Conditionally render the Avatar or AuthModal */}
            {user ? <Avatar /> : <AuthModal />}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </span>
          </Link>
          <Link href="/shop">
            <span className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Shop
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              About
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </span>
          </Link>

          <div className="flex justify-around mt-4">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaHeart className="h-6 w-6" />
            </button>
            <button className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaShoppingCart className="h-6 w-6" />
            </button>
          </div>

          <Link href="/signin">
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white block w-full px-3 py-2 rounded-md text-base font-medium">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
