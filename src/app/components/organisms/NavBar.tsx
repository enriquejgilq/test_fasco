"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl text-[58px] font-volkhov">Fasco</div>
           <div className="hidden md:flex space-x-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="deals"
              smooth={true}
              duration={500}
              className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins"
            >
              Deals
            </ScrollLink>
            <ScrollLink
              to="new-arrivals"
              smooth={true}
              duration={500}
              className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins"
            >
              New Arrivals
            </ScrollLink>
            <ScrollLink
              to="packages"
              smooth={true}
              duration={500}
              className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins"
            >
              Packages
            </ScrollLink>
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins">
              <Link href="/login">Sign In</Link>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              <Link href="/signup">Sign up</Link>
            </button>
          </div>

           <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

       {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="px-3 py-2 text-sm font-medium hover:underline cursor-pointer font-poppins"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="deals"
              smooth={true}
              duration={500}
              className="px-3 py-2 text-sm font-medium hover:underline cursor-pointer font-poppins"
              onClick={toggleMenu}
            >
              Deals
            </ScrollLink>
            <ScrollLink
              to="new-arrivals"
              smooth={true}
              duration={500}
              className="px-3 py-2 text-sm font-medium hover:underline cursor-pointer font-poppins"
              onClick={toggleMenu}
            >
              New Arrivals
            </ScrollLink>
            <ScrollLink
              to="packages"
              smooth={true}
              duration={500}
              className="px-3 py-2 text-sm font-medium hover:underline cursor-pointer font-poppins"
              onClick={toggleMenu}
            >
              Packages
            </ScrollLink>
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:underline cursor-pointer font-poppins">
              <Link href="/login" onClick={toggleMenu}>
                Sign In
              </Link>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              <Link href="/signup" onClick={toggleMenu}>
                Sign up
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
