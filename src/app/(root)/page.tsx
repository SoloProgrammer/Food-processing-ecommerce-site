import React from "react";
import CategoriesSlider from "@/components/CategoriesSlider/CategoriesSlider";
import BannerSlider from "@/components/ImageSlider/Slider";
import Divider from "@/components/Divider/Divider";
import { aboreto } from "@/fonts/fonts";

const HomePage = () => {
  const sliderImages = [
    {
      title: "Mongo Pulp",
      src: "http://aditifoods.com/images/main_banner/main_banner_1.jpg",
    },
    {
      title: "Ketchups & Jams",
      src: "http://aditifoods.com/images/main_banner/main_banner_2.jpg",
    },
    {
      title: "Canned Products",
      src: "http://aditifoods.com/images/main_banner/main_banner_3.jpg",
    },
    {
      title: "Private Labels",
      src: "http://aditifoods.com/images/main_banner/main_banner_4.jpg",
    },
  ];
  return (
    <div>
      <BannerSlider images={sliderImages} autoPlay/>
      <Divider className="px-5 md:px-20 my-14"/>
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
