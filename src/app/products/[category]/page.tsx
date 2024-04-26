import React from "react";
import styles from "./page.module.css";
import categories from "@/data/categories.json";
import Image from "next/image";
import { aboreto } from "@/fonts/fonts";
import productsData from "@/data/products.json";
import CustomIconButton from "@/components/CustomIcon/CustomIcon";
import { Product } from "@/types/types";
import ProductsList from "@/components/products/ProductsList/ProductsList";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

type PageProps = {
  params: {
    category: string;
  };
};
const page = ({ params }: PageProps) => {
  const { category: slug } = params;
  const category = categories.filter((cat) => cat.slug === slug)[0];

  const products: Product[] = productsData.filter((p) => p.cat_slug === slug);

  return (
    <div className={`${styles.container} flex w-full h-full`}>
      <main className={`${styles.main} pb-10`}>
        <div className={`${styles.banner} bg-gray-100`}>
          <Image src={category.banner} alt={category.title} fill />
        </div>
        <h1 className={`${aboreto.className} text-center text-4xl mt-5 mb-5`}>
          {category.title}
        </h1>
        <div className="flex w-full justify-end mds:hidden items-center gap-4 pr-3 md:pr-20 mb-16">
          <span>View categories: </span>

          <CustomIconButton
            Icon={
              <Link href={`?open=true`}>
                <CgMenuRight />
              </Link>
            }
          />
        </div>
        <ProductsList products={products} />
      </main>
    </div>
  );
};

export default page;
