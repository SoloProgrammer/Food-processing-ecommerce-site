"use client";

import { useEffect, useRef, useState } from "react";

const useImageSlider = (duration: number = 2000, autoPlay: boolean = true) => {
  const [currSlide, setCurrSlide] = useState(1);
  const inidicatorRef = useRef<HTMLDivElement>(null);

  // Initiating tab indicator default position
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
    setCurrSlide(i + 1);
  };

  const tabRefs = useRef<HTMLDivElement[]>([]);

  // autoplay slider logic
  useEffect(() => {
    if (!autoPlay) return;

    const sliderTimer = setInterval(() => {
      setCurrSlide((prev) => (prev > 3 ? 1 : prev + 1));
    }, duration);

    return () => {
      clearInterval(sliderTimer);
    };
  }, [currSlide]);

  // autoplay indicator tab logic
  useEffect(() => {
    const currTab = tabRefs.current[currSlide - 1] as HTMLDivElement;
    if (inidicatorRef.current) {
      inidicatorRef.current.style.left = `${currTab.offsetLeft}px`;
      inidicatorRef.current.style.width = `${currTab.offsetWidth}px`;
    }
  }, [tabRefs, currSlide, inidicatorRef]);

  return {
    handleSlideChange,
    inidicatorRef,
    tabRefs,
    currSlide,
  };
};

export default useImageSlider;
