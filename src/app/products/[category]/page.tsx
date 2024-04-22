import React from "react";
import styles from "./page.module.css";
import categories from "@/data/categories.json";
import Link from "next/link";
import Image from "next/image";
type PageProps = {
  params: {
    category: string;
  };
};
const page = ({ params }: PageProps) => {
  const { category: slug } = params;
  const category = categories.filter((cat) => cat.slug === slug)[0];

  return (
    <div className={`${styles.container} flex w-full h-full`}>
      <aside className={`${styles.sideBar} !h-auto`}>
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
      <main className={`${styles.main} max-h-[100vh] overflow-y-auto`}>
        <div className={`${styles.banner} bg-gray-100`}>
          <Image src={category.banner} alt={category.title} fill />
        </div>
        <h1 className="text-center text-3xl mt-24">{category.title}</h1>
      </main>
    </div>
  );
};

export default page;
