"use client";
import React, { useEffect } from "react";
import NavBar from "./components/organisms/NavBar";
import { Deals } from "./pages/Deals/Deals";
import InitialPage from "./pages/Home/Home";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import InstagramPanel from './pages/InstagramPane/InstagramPanel'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Link as ScrollLink } from 'react-scroll'
import Collections from "./pages/Collections/Collections";
import Customers from "./pages/Customers/Customers";
export default function Home() {

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('.page');
      let currentPage = 0; sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - window.innerHeight / 2) { currentPage = index; }
      });
      updateNavbar(currentPage);
    }; const updateNavbar = (index: number) => {
      document.querySelectorAll('.navbar a').forEach((link, linkIndex) => {
        link.classList.toggle('active', linkIndex === index);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<>
    <NavBar />
    <div>
      <InitialPage />
      <Deals />
      <NewArrivals />
      <Collections/>
      <InstagramPanel />
      <Customers/>
      <div className="fixed bottom-0 right-0 flex flex-col gap-2 p-4 md:flex-row md:bottom-4 md:right-4">
        <button className="flex items-center justify-center bg-black text-white rounded-lg p-2 mb-2 md:mb-0">
          <ShoppingCartOutlinedIcon />
        </button>
        <button className="flex items-center justify-center bg-black text-white rounded-lg p-2">
          <ScrollLink to="home" smooth={true} duration={500}>
            <ArrowUpwardOutlinedIcon />
          </ScrollLink>
        </button>
      </div>
    </div>
  </>
  );
}
