import Link from "next/link";
import React from "react";
import {
  FaBookOpen,
  FaCube,
  FaGlobe,
  FaHome,
  FaQuestion,
} from "react-icons/fa";
import { Separator } from "../ui/separator";
import { FaMessage } from "react-icons/fa6";

type NavProps = {
  onLinkClick: () => void;
};

const MobileNavlinks = ({ onLinkClick }: NavProps) => {
  return (
    <ul className="flex flex-col gap-3">
      <Separator />
      <li className="flex gap-5 items-center mt-5">
        <FaHome size={25} />
        <Link
          href={"/"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Home
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <FaBookOpen size={25} />
        <Link
          href={"/about"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          About
        </Link>
      </li>
      <Separator />
      <li className="flex gap-5 items-center ">
        <FaGlobe size={25} />
        <Link
          href={"/destinations"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Destinations
        </Link>
      </li>
      <Separator />{" "}
      <li className="flex gap-5 items-center ">
        <FaCube size={25} />
        <Link
          href={"/tour-packages"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Tour Packages
        </Link>
      </li>
      <Separator />{" "}
      <li className="flex gap-5 items-center ">
        <FaQuestion size={25} />
        <Link
          href={"/faqs"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Faqs
        </Link>
      </li>
      <Separator />{" "}
      <li className="flex gap-5 items-center ">
        <FaMessage size={25} />
        <Link
          href={"/contact"}
          onClick={onLinkClick}
          className="font-bold text-lg hover:underline"
        >
          Contact
        </Link>
      </li>
      <Separator />
    </ul>
  );
};

export default MobileNavlinks;
