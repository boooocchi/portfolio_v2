import React from "react";
import { roboto, rubik } from "../../../font_family/font_family";

type ButtonProps = {
  children: React.ReactNode;
  isSubmitting?: boolean;
  additionalClass?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isSubmitting,
  additionalClass
}) => {
  const additionalClassName = additionalClass
    ? additionalClass
    : "md:w-[9rem] w-[7rem]";
  return (
    <button
      className={` border-transparent bg-mainBlue text-center px-2 py-1 md:px-3 md:py-2 hover:bg-fontGray hover:text-mainBlue duration-300 border-2 hover:border-mainBlue ${additionalClassName} ${roboto.className} tracking-[0.1px] text-[.9rem]`}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
};

export default Button;
