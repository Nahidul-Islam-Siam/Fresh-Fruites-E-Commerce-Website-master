'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { AuthModal } from './AuthModal';
import { Avatar } from './AvatarDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const menuLinks = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= prevScrollY);
      setPrevScrollY(currentScrollY);
      setBgColor(currentScrollY > 0 ? 'bg-white' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <motion.nav
      className={`${bgColor} transition-all fixed w-full top-0 z-50`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <Image src="/assets/Logo.svg" alt="Fresh Harvests" width={200} height={200} />
        </Link>

        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {menuLinks.map(({ name, link }) => (
            <Link href={link} key={name} className="px-3 py-2 rounded-md text-sm text-[#4A4A52] font-medium">
              {name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <FaHeart className="h-6 w-6  cursor-pointer hover:text-gray-800" />
          <Link href="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute bottom-[70%] left-[85%] text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? <Avatar /> : <AuthModal />}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1">
          {menuLinks.map(({ name, link }) => (
            <Link href={link} key={name} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100">
              {name}
            </Link>
          ))}

          <div className="flex justify-around mt-4">
            <FaHeart className="h-6 w-6 cursor-pointer hover:text-gray-800" />
            <Link href="/cart" className="relative">
              <FaShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute bottom-[70%] left-[85%] text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {user ? (
            <Avatar />
          ) : (
            <Link href="/signin" className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium">
              Sign In
            </Link>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;