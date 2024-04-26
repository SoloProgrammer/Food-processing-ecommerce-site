import React from "react";
import styles from "./style.module.css";
import categories from "@/data/categories.json";
import Link from "next/link";
import { cn } from "@/utils/cn";

type SidebarProps = {
  slug: string;
  className?: string;
  isOpen?: string;
};

const Sidebar = ({ slug, className, isOpen = "false" }: SidebarProps) => {
  return (
    <div>
      <Link href={{ pathname: `/products/${slug}` }}>
        <div
          className={`${
            isOpen !== "true"
              ? "opacity-0 select-none pointer-events-none"
              : "opacity-70"
          } w-full z-10 h-full fixed mds:hidden bg-black top-0 transition-opacity duration-200`}
        />
      </Link> 
      <aside
        style={{
          transition: "left 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        className={cn(
          `${styles.sideBar} ${
            isOpen === "true" ? "!left-0" : ""
          } !h-auto relative z-20`,
          className
        )}
      >
        {categories.map((cat) => (
          <Link
            href={`/products/${cat.slug}`}
            className={`py-5 px-5 border-l-[8px] border-transparent hover:bg-indigo-50 cursor-pointer text-gray-500 ${
              slug === cat.slug &&
              "!border-indigo-500 bg-indigo-50 !text-indigo-800"
            }`}
            key={cat.slug}
          >
            {cat.title}
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
