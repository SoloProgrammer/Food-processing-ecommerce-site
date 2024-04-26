"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "@/assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import CustomIconButton from "../CustomIcon/CustomIcon";
import { useParams, usePathname } from "next/navigation";

const Navbar = () => {
  const params = useParams()
  console.log(params);
  
  const Links = [
    {
      name: "Home",
      redirect: "/",
    },
    {
      name: "About",
      redirect: "/about",
    },
    {
      name: "Products",
      redirect: `/products/${params.category || 'mango-pulp-slices'}`,
    },
    {
      name: "Events",
      redirect: "/events",
    },
    {
      name: "Contact",
      redirect: "/contact",
    },
  ];
  
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const isActiveLink = (linkPath: string) =>
    pathName === linkPath || (pathName.includes(linkPath) && linkPath !== "/");
  return (
    <header className="sticky top-0 z-20 flex px-5 md:px-20 py-2 items-center justify-between bg-white shadow-md">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          className="w-[60px] md:w-[100px] hue-rotate-[197deg]"
        />
      </Link>
      <nav
        className={`${styles.nav} ${
          open ? "!h-[245px] !py-3" : ""
        } shadow-md md:shadow-none flex gap-2 relative transition-all`}
      >
        {Links.map((link) => (
          <Link
            key={link.name}
            href={link.redirect}
            className={`${
              isActiveLink(link.redirect)
                ? "md:!border-indigo-500 !text-indigo-500 !bg-indigo-100"
                : ""
            } px-5 bg border border-transparent rounded-md py-1 font-medium text-gray-500 cursor-pointer hover:bg-gray-100`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div
        tabIndex={1}
        onBlur={() => setOpen(false)}
        className="flex items-center gap-3"
      >
        <CustomIconButton
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="md:hidden"
          Icon={<CgMenuRight />}
        />
        <CustomIconButton
          className="text-xl"
          Icon={
            <Link href={"/contact"}>
              <BiSupport />
            </Link>
          }
        />
      </div>
    </header>
  );
};

export default Navbar;
