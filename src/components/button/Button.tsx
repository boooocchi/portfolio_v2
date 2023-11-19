import React from "react";
import { roboto, rubik } from "../../../font_family/font_family";

type ButtonProps = {
  children: React.ReactNode;
  isSubmitting?: boolean;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({ children, isSubmitting, width }) => {
  return (
    <button
      className={`w-[10rem] border-transparent bg-mainBlue text-center px-3 py-2 hover:bg-fontGray hover:text-mainBlue duration-300 border-2 hover:border-mainBlue ${width} ${roboto.className} tracking-[0.1px] text-[.9rem]`}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
};

export default Button;
