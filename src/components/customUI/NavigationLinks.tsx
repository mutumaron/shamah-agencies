import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <ul className="flex justify-between gap-4">
      <li>
        <Link href={"/"} className=" font-bold hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/about"} className="font-bold hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link href={"/destinations"} className=" font-bold hover:underline">
          Destinations
        </Link>
      </li>
      <li>
        <Link href={"/tour-packages"} className=" font-bold hover:underline">
          Tour-Packages
        </Link>
      </li>
      <li>
        <Link href={"/contact"} className="font-bold hover:underline">
          Contact
        </Link>
      </li>
      <li>
        <Link href={"/faqs"} className="font-bold hover:underline">
          faqs
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
