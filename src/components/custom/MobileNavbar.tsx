"use client";

// components/MobileNavbar.js
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavigationLinks from "../customUI/NavigationLinks";
import MobileNavlinks from "../customUI/MobileNavlinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const MobileNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav
        className="flex md:hidden fixed top-0 left-0 w-full z-50 justify-between items-center px-4 py-3 shadow-sm"
        style={{
          backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
        }}
      >
        {/* Hamburger menu button */}
        <button onClick={toggleSidebar} className="p-2">
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo and Agency Name */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <h1 className="text-lg font-bold">SHAMAH AGENCIES</h1>
        </div>

        {/* Phone icon button */}
        <button className="p-2">
          <Phone className="h-6 w-6" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
        className={`fixed top-0 left-0 h-full w-3/4 ${
          theme === "dark" ? "bg-[#09090b]" : "bg-white"
        } z-50 shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <h1 className="text-lg font-bold">SHAMAH AGENCIES</h1>
          </div>
          <button onClick={toggleSidebar} className="font-bold">
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
