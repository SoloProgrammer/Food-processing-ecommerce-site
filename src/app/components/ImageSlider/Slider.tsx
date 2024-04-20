"use client";

import { ImageType } from "@/types/types";
import React, { useEffect, useRef, useState } from "react";

import styles from "./Slider.module.css";
import Image from "next/image";

type SliderProps = {
  images: ImageType[];
};
const Slider = ({ images }: SliderProps) => {
  const [currSlide, setCurrSlide] = useState(1);
  const inidicatorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inidicatorRef.current) {
      inidicatorRef.current.style.left = "8px";
      inidicatorRef.current.style.width = "165px";
    }
  }, [inidicatorRef.current]);
  const handleSlideChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    const target = e.target as HTMLDivElement;
    const left = target.offsetLeft;
    const width = target.offsetWidth;
    if (inidicatorRef.current) {
      inidicatorRef.current.style.left = `${left}px`;
      inidicatorRef.current.style.width = `${width}px`;
      setCurrSlide(i + 1);
    }
  };
  const tabRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrSlide((prev) => (prev > 3 ? 1 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(sliderTimer);
    };
  }, [currSlide]);

  useEffect(() => {
    const currTab = tabRefs.current[currSlide - 1] as HTMLDivElement;
    if (inidicatorRef.current) {
      inidicatorRef.current.style.left = `${currTab.offsetLeft}px`;
      inidicatorRef.current.style.width = `${currTab.offsetWidth}px`;
    }
  }, [tabRefs, currSlide, inidicatorRef]);

  const ImageSlideOffset = `translate-x-[-${(currSlide - 1) * 100}%]`;

  return (
    <div className={`${styles.container}`}>
      <div className="flex overflow-hidden">
        {images.map((img) => (
          <div
            key={img.title}
            className={`${ImageSlideOffset} flex-shrink-0 ${styles.imageBox} relative w-full `}
          >
            <Image fill src={img.src} alt={img.title} />
          </div>
        ))}
      </div>
      <div className="hidden md:flex w-full justify-center mt-2">
        <div className="flex items-center lg:gap-4 md:gap-1 mx-2 px-2 rounded-lg justify-center bg-gray-100 py-2 overflow-x-auto relative border-solid border-[1px] border-gray-300">
          {images
            .map((img) => img.title)
            .map((t, i) => (
              <div
                ref={(el) => {
                  tabRefs.current[i] = el!;
                }}
                onClick={(e) => {
                  handleSlideChange(e, i);
                }}
                key={t}
                className={`md:px-7  lg:px-10 py-1 rounded-md cursor-pointer whitespace-nowrap z-10`}
              >
                {t}
              </div>
            ))}
          <div
            ref={inidicatorRef}
            className={`${styles.indicator} bg-white shadow-md h-[70%] absolute rounded-lg duration-[.3s]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
