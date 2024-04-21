import React from "react";
import Slider from "./components/ImageSlider/Slider";

const page = () => {
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
      <Slider images={sliderImages} autoPlay/>
    </div>
  );
};

export default page;
