'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
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

  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? 'text-green-900 border-b-1  border-[#749B3F] border-w-2'
      : 'text-gray-600 hover:text-gray-900';

  const menuLinks = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < prevScrollY) {
        setIsVisible(false);
      }

      setPrevScrollY(currentScrollY);

      if (window.scrollY > 0) {
        setBgColor('bg-white');
      } else {
        setBgColor('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const handleDropdownOpen = () => {
    setIsOpen(true);
    setBgColor('bg-white');
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
    if (window.scrollY === 0) {
      setBgColor('bg-transparent');
    }
  };

  return (
    <motion.nav
      className={`${bgColor} transition-all fixed w-full top-0 z-50`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src="/assets/Logo.svg"
                    alt="Fresh Harvests"
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-6">
            {menuLinks.map((link) => (
              <Link href={link.link} passHref key={link.name}>
                <span
                  className={`px-3 py-2 rounded-md text-lg font-medium ${isActive(link.link)}`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="mr-2 text-sm font-medium">Favorite</span>
              <FaHeart className="h-6 w-6" />
            </button>

            <Link href="/cart" passHref>
              <button className="flex items-center text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
                <span className="mr-2 text-sm font-medium">Cart</span>
                <FaShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute bottom-[70%] left-[85%] text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>

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
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block bg-white' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuLinks.map((link) => (
            <Link href={link.link} passHref key={link.name}>
              <span className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </span>
            </Link>
          ))}

          <div className="flex justify-around mt-4">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaHeart className="h-6 w-6" />
            </button>
            <Link href="/cart">
              <button className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
                <FaShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute bottom-[70%] left-[85%] text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {user ? (
            <Avatar />
          ) : (
            <Link href="/signin">
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white block w-full px-3 py-2 rounded-md text-base font-medium">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
