"use client";
import React from "react";
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'

const NavBar = () => {
    return (
        <nav className="shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-xl text-[56px] font-volkhov">Fasco</div>
                    <div className="hidden md:flex space-x-4">
                        <ScrollLink to="home" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium"> Home </ScrollLink>
                        <ScrollLink to="deals" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:underline"> Deals </ScrollLink>
                        <ScrollLink to="new-arrivals" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium"> New Arrivals </ScrollLink>
                        <button className="px-3 py-2 rounded-md text-sm font-medium">
                            <Link href="/login">Sign In</Link>
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-md"> Sign Up </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
