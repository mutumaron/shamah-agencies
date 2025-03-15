"use client";

// components/MobileNavbar.js
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import NavigationLinks from "../customUI/NavigationLinks";
import MobileNavlinks from "../customUI/MobileNavlinks";

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <nav className="flex md:hidden fixed top-0 left-0 w-full z-50 justify-between items-center px-4 py-3 shadow-sm bg-white">
        {/* Hamburger menu button */}
        <button onClick={toggleSidebar} className="p-2">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo and Agency Name */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <h1 className="text-lg font-bold">SHAMAH AGENCIES</h1>
        </div>

        {/* Phone icon button */}
        <button className="p-2">
          <Phone className="h-6 w-6 text-gray-700" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <h1 className="text-lg font-bold">SHAMAH AGENCIES</h1>
          </div>
          <button onClick={toggleSidebar} className="text-gray-700 font-bold">
            <X />
          </button>
        </div>
        {/* Navigation Links */}
        <MobileNavlinks onLinkClick={closeSidebar} />
      </div>
    </>
  );
};

export default MobileNavbar;
