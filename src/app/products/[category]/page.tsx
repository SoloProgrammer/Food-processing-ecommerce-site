import React from "react";
import styles from "./page.module.css";
import categories from "@/data/categories.json";
import Image from "next/image";
import { aboreto } from "@/fonts/fonts";
import productsData from "@/data/products.json";
import Divider from "@/components/Divider/Divider";
import ProductDetailModal from "@/components/modals/ProductDetailModal/ProductDetailModal";
import { Product, ProductDetails } from "@/types/types";

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

          <CustomIcon
            Icon={
              <Link href={`?open=true`}>
                <CgMenuRight />
              </Link>
            }
          />
        </div>
        <Products products={products} />
      </main>
    </div>
  );
};

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mds:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 md:gap-10 mx-2 md:mx-10">
      {products.map((product, i) => (
        <div
          key={i}
          className={`${styles.productContainer} mdl:min-w-[255px] mdl:max-w-[255px] 
              md:min-w-[200px] md:max-w-[200px] w-full group flex flex-col shadow-md items-center `}
        >
          <div
            className={`${styles.productImageBox} w-full aspect-[1/1] relative`}
          >
            <Image
              className="relative w-full h-full object-cover"
              fill
              src={product?.images[0]!}
              alt={product?.title!}
            />
            <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-[#0000003d] top-0 left-0 transition-all" />
          </div>
          <Divider className="mt-5 px-2" />
          <div
            className={`${styles.productDetails} text-gray-500 flex-grow-[1] px-2 py-3`}
          >
            <h1>{product?.title}</h1>
          </div>
          <ProductDetailModal
            modalTriggerElm={
              <button className="py-2 bg-indigo-400 hover:bg-indigo-500 cursor-pointer text-white w-full text-center">
                view details
              </button>
            }
          >
            <ProductDetail product={product!} />
          </ProductDetailModal>
        </div>
      ))}
    </div>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CgMenuRight } from "react-icons/cg";
import CustomIcon from "@/components/CustomIcon/CustomIcon";
import Link from "next/link";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <>
      <h1 className={`text-2xl font-medium`}>{product.title}</h1>
      <Divider className="mt-3" />
      <div>
        <Accordion
          defaultValue="Nature of products"
          type="single"
          collapsible
          className="w-full"
        >
          {Object.keys(product.details as ProductDetails).map((key) => {
            let detailsKey = product.details[key as keyof ProductDetails]!;
            return (
              <AccordionItem key={key} value={key} className="max-w-[88vw]">
                <AccordionTrigger>{key}?</AccordionTrigger>
                <AccordionContent>
                  {typeof detailsKey === "string" ? (
                    detailsKey
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          {Object.keys(detailsKey).map((k, i) => {
                            return (
                              <th
                                key={i}
                                className="px-3 py-3 border-2 border-gray-200 whitespace-nowrap"
                              >
                                {k}
                              </th>
                            );
                          })}
                        </thead>
                        <tbody>
                          <tr>
                            {Object.values(detailsKey).map((v, i) => {
                              return (
                                <td
                                  key={i}
                                  className="text-center px-3 py-2 border-2 border-gray-200 whitespace-nowrap"
                                >
                                  {v as string}
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default page;
