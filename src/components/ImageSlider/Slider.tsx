"use client";

import { ImageType } from "@/types/types";
import React, { LegacyRef, forwardRef } from "react";

import styles from "./Slider.module.css";
import Image from "next/image";
import { isMobileScreen } from "@/lib/utils";
import useImageSlider from "@/hooks/use-image-slider";

type SliderProps = {
  images: ImageType[];
  autoPlay?: boolean;
  duration?: number;
};
const Slider = ({ images, autoPlay = false, duration = 3000 }: SliderProps) => {
  const { currSlide, handleSlideChange, inidicatorRef, tabRefs } =
    useImageSlider(duration, autoPlay);

  // ImageSliderOffset value
  const ImageSlideOffset = `translateX(-${(currSlide - 1) * 100}%)`;

  return (
    <div className={`${styles.container}`}>
      <div className="flex overflow-hidden">
        {images.map((img) => (
          <div
            key={img.title}
            style={{
              transform: ImageSlideOffset,
            }}
            className={`flex-shrink-0 ${styles.imageBox} relative w-full `}
          >
            <Image fill src={img.src} alt={img.title} />
          </div>
        ))}
      </div>
      <SliderTabs
        handleTabChange={handleSlideChange}
        tabs={images.map((img) => img.title)}
        tabRefs={tabRefs}
        ref={inidicatorRef}
        currTab={currSlide}
      />
    </div>
  );
};

type SliderTabsProps = {
  handleTabChange: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tabIndex: number
  ) => void;
  tabs: String[];
  tabRefs: React.MutableRefObject<HTMLDivElement[]>;
  currTab: number;
};

const SliderTabs = forwardRef(
  (
    { handleTabChange, tabs, tabRefs, currTab }: SliderTabsProps,
    indicatorRef: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div className="hidden md:flex w-full justify-center mt-2">
        <div className="flex items-center lg:gap-4 md:gap-1 mx-2 px-2 rounded-lg mds:justify-center bg-gray-100 py-2 overflow-x-auto relative border-solid border-[1px] border-gray-300 justify-between">
          {tabs.map((t, i) => (
            <div
              ref={(el) => {
                tabRefs.current[i] = el!;
              }}
              onClick={(e) => handleTabChange(e, i)}
              key={i}
              className={`px-5 md:px-7 lg:px-10 py-1 rounded-md cursor-pointer whitespace-nowrap z-10 text-sm mds:text-lg`}
            >
              {/* {isMobileScreen() ? (currTab !== i + 1 ? "○" : t) : t} */}
              {t}
            </div>
          ))}
          <div
            ref={indicatorRef}
            className={`${styles.indicator} bg-white shadow-md h-[70%] absolute rounded-lg duration-[.3s]`}
          />
        </div>
      </div>
    );
  }
);

export default Slider;
