import React from "react";

interface ButtonProps {
  text: string;
  bgClassName?: string; // Only for dynamic background color
  onClick?: () => void;
}

const GlitchButton: React.FC<ButtonProps> = ({
  text,
  bgClassName = "bg-white", // Default background
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgClassName}
        px-8 py-0.5 h-8
        border-2 border-black dark:border-white 
        uppercase 
        text-black 
        transition duration-200 
        text-sm 
        shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
        dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
        hover:brightness-95
        active:brightness-90
        active:translate-y-0.5
      `}
    >
      {text}
    </button>
  );
};

export default GlitchButton;
