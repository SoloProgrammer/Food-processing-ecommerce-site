import { cn } from "@/utils/cn";
import React from "react";

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("px-3 md:px-20 my-7 md:my-10", className)}>
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
    </div>
  );
};

export default Divider;
