"use client";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/CategoriesSideBar/Sidebar";
import styles from "./layout.module.css";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    category: string;
  };
}>) {
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("open");

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar
          isOpen={isOpen!}
          slug={params.category}
          className={` fixed md:top-[70px] lg:top-[82px] bg-white z-10 !h-screen left-0`}
        />
        <div className={`${styles.layoutContainer} md:ml-[300px] w-full`}>
          <div className="flex-grow-[1]">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
