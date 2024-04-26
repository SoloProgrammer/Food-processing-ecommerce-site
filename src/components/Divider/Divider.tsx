import { cn } from "@/lib/utils";
import React from "react";

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="h-1 bg-gray-200 rounded overflow-hidden w-full">
        <div className="w-[20%] h-full bg-indigo-500"></div>
      </div>
    </div>
  );
};

export default Divider;
