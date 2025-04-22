import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 px-4 lg:px-0, ${className}`}>
      {children}
    </div>
  );
};

export default Container;
