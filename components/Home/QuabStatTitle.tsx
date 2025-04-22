import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
const QuabStatTitle = () => {
  return (
    <div>
      <div className="h-[20rem] flex items-center justify-center relative">
        <h1 className="absolute top-15 text-9xl text-cyan-400/50 tracking-[1rem] inline-block ">
          QUBESTAT
        </h1>
        <TextHoverEffect text="QUBESTAT" />
      </div>
    </div>
  );
};

export default QuabStatTitle;
