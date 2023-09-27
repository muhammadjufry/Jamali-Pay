import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <div className={twMerge("max-w-7xl mx-auto", className)}>{children}</div>
  );
}

export default Container;
