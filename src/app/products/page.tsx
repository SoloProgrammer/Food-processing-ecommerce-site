"use client";
import React, { useEffect } from "react";
import catgories from "@/data/categories.json";
import useRouterPush from "@/hooks/use-router-push";
const page = () => {
  const category1 = catgories[0];
  const push = useRouterPush();
  useEffect(() => {
    push(`/products/${category1.slug}`);
  }, []);
  return <div></div>;
};

export default page;
