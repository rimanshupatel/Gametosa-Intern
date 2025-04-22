import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
const MatrixTitle = () => {
  return (
    <div>
      <div className="h-[20rem] flex items-center justify-center relative">
        <h1
          className="
  absolute top-15 
  text-9xl 
  text-cyan-400/50 
  tracking-[1rem] 
  inline-block 
  drop-shadow-[0_0_100px_rgba(34,211,238,0.5)]
  animate-pulse
  [text-shadow:_0_0_10px_rgba(34,211,238,0.8),_0_0_20px_rgba(34,211,238,0.6),_0_0_30px_rgba(34,211,238,0.4)]
  transition-all
  duration-1000
  hover:text-cyan-400/70
  hover:[text-shadow:_0_0_15px_rgba(34,211,238,1),_0_0_25px_rgba(34,211,238,0.8),_0_0_35px_rgba(34,211,238,0.6)]
"
        >
          MATRIX
        </h1>
        <TextHoverEffect text="MATRIX" />
      </div>
    </div>
  );
};

export default MatrixTitle;
