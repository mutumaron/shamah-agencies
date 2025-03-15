import { Menu, MenuIcon, Phone, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationLinks from "../customUI/NavigationLinks";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="md:flex justify-between fixed top-0 left-0 w-full z-50 bg-white items-center px-10 py-5 shadow-sm hidden">
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
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h1 className=" font-bold text-md">Call us:</h1>
              <a className=" font-semibold" href="tel:+254796509425">
                +254796509425
              </a>
            </div>
          </div>
          <div className="flex gap-3 p-2 items-center rounded-2xl cursor-pointer border hover:shadow-md">
            <MenuIcon className="" />
            <div className="bg-transparent rounded-full p-1">
              <UserRound color="#000" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
