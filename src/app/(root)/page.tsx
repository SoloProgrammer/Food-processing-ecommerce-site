import React from "react";
import CategoriesSlider from "@/components/CategoriesSlider/CategoriesSlider";
import BannerSlider from "@/components/ImageSlider/Slider";
import Divider from "@/components/Divider/Divider";
import { aboreto } from "@/fonts/fonts";
import sliderImages from "@/data/sliderImages.json";

const HomePage = () => {
  return (
    <div>
      <BannerSlider images={sliderImages} autoPlay />
      <Divider className="px-5 my-7 md:px-20 md:my-14" />
      <h1
        className={`${aboreto.className} text-2xl md:text-3xl px-4 md:px-20 mt-4 text-gray-700 font-bold`}
      >
        Our Featured Product Categories
      </h1>
      <CategoriesSlider />
    </div>
  );
};

export default HomePage;
