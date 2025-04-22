import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
const QuabStatTitle = () => {
  return (
    <div>
      <div className="h-[20rem] flex items-center justify-center relative">
        <h1 className="absolute text-8xl text-cyan-400">QUBESTAT</h1>
        <TextHoverEffect text="QUBESTAT" />
      </div>
    </div>
  );
};

export default QuabStatTitle;
