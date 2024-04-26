"use client";
import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type CustomIconButtonButtonProps = {
  Icon: React.JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomIconButton = ({ Icon, onClick, className }: CustomIconButtonButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-gray-100 p-2 rounded-full border border-gray-300 cursor-pointer",
        className
      )}
    >
      {Icon}
    </button>
  );
};

export default CustomIconButton;
