"use client";

import { Menu, MenuIcon, Moon, Phone, Sun, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavigationLinks from "../customUI/NavigationLinks";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <section
        className={`md:flex justify-between fixed top-0 left-0 w-full z-50  items-center px-10 py-5 shadow-sm hidden`}
        style={{
          backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
        }}
      >
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={40} height={40} />
            <h1 className="font-bold text-2xl">SHAMAH AGENCIES</h1>
          </Link>
        </div>
        <NavigationLinks />
        <div className="flex items-center gap-5">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 bg-purple-100 rounded-full p-1 flex items-center justify-center">
              <Phone className={`h-6 w-6 text-black`} />
            </div>
            <div>
              <h1 className=" font-bold text-md">Call us:</h1>
              <a className=" font-semibold" href="tel:+254796509425">
                +254796509425
              </a>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Navbar;
