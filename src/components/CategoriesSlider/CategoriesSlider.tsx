"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import categories from "@/data/categories.json";
import { ProductCategory } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const CategoriesSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1400 },
      items: 6,
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1400 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite autoPlay>
      {categories.map((c, i) => (
        <div key={i} className="flex flex-wrap m-4 group overflow-hidden">
          <Link passHref href={`/products/${c.slug}`} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="h-[13rem] lg:h-48 md:h-36 w-full object-contain group-hover:scale-90 group-hover:rotate-3 transition-all duration-300"
                src={c.image}
                alt="blog"
                width={200}
                height={200}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {c.title}
                </h1>
                <p className="leading-relaxed mb-3 text-sm text-gray-400">
                  {c.short_desc}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoriesSlider;
