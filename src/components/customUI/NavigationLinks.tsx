import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <ul className="flex justify-between gap-4">
      <li>
        <Link href={"/"} className="text-gray-800 font-bold hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className="text-gray-800 font-bold hover:underline"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/destinations"}
          className="text-gray-800 font-bold hover:underline"
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          href={"/tour-packages"}
          className="text-gray-800 font-bold hover:underline"
        >
          Tour-Packages
        </Link>
      </li>
      <li>
        <Link
          href={"/contact"}
          className="text-gray-800 font-bold hover:underline"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href={"/faqs"}
          className="text-gray-800 font-bold hover:underline"
        >
          faqs
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
