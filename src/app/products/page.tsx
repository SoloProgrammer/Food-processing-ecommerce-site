"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import catgories from "@/data/categories.json";
const page = () => {
  const category1 = catgories[0];
  const router = useRouter();
  useEffect(() => {
    router.push(`/products/${category1.slug}`);
  }, []);
  return <div></div>;
};

export default page;
