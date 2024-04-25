import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import styles from "./Navbar.module.css";
import Logo from "../../assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="hidden sticky top-0 z-20 md:flex px-20 py-2 items-center justify-between bg-white shadow-md">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          className="w-[60px] md:w-[100px] hue-rotate-[197deg]"
        />
      </Link>
      <div className="flex gap-2 relative">
        <span className="px-5 bg rounded-md py-1 font-bold text-gray-800 cursor-pointer">
          Home
        </span>
        <span className="px-5 bg rounded-md py-1 font-medium text-slate-500">
          About Us
        </span>
        <span className="px-5 bg rounded-md py-1 font-medium text-slate-500">
          Products
        </span>
        <span className="px-5 bg rounded-md py-1 font-medium text-slate-500">
          Events
        </span>
        <span className="px-5 bg rounded-md py-1 font-medium text-slate-500">
          Contact
        </span>
        <div
          className={`${styles.indicator} absolute top-[-25px] left-[3px] w-20 h-[6px] rounded-sm bg-indigo-500`}
        />
      </div>
      {/* <div className={`${styles.socialIcons} flex gap-3`}>
        <FaInstagram />
        <RiTwitterXFill />
        <LuFacebook />
        <AiOutlineYoutube />
      </div> */}
    </div>
  );
};

export default Navbar;
