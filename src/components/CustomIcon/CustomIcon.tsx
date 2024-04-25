"use client";
import React from "react";
import { IconType } from "react-icons";

const CustomIcon = ({
  Icon,
  onClick,
}: {
  Icon: React.JSX.Element;
  onClick?: () => void;
}) => {
  return (
    <span
      onClick={onClick}
      className="bg-gray-100 p-2 rounded-full border border-gray-300"
    >
      {Icon}
    </span>
  );
};

export default CustomIcon;
