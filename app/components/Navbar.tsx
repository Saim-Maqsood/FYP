"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#1a1a1a]">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Image src={"/Logo.jpg"} width={50} height={50} alt='logo' className="rounded-3xl w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 bg-blue-500 shadow-blue-500/50"/>
          <button
            className="block lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300 ease-in-out transform rotate-45 text-black" // Added text-black for black color
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white" // Added text-black for black color
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'
              }`}
          >
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-blue-500">
              Store
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact Us
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-blue-500">
              Cart
            </Link>
          </div>
        </div>
      </nav>
      <div className='w-screen h-[5dvh] flex justify-center text-white gap-6'>
        <SignUpButton />
        <SignInButton />
      </div>
    </>
  );
};

export default Navbar;