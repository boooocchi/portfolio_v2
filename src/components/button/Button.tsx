import React from "react";
import { hind, japanese } from "../../../font_family/font_family";

import { useTranslation } from "next-i18next";
type ButtonProps = {
  children: React.ReactNode;
  isSubmitting?: boolean;
  additionalClass?: string;
  onClick?: () => void;
  bgColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isSubmitting,
  additionalClass,
  onClick,
  bgColor = null
}) => {
  const { i18n } = useTranslation();
  const additionalClassName = additionalClass
    ? additionalClass
    : "md:w-[9rem] w-[7rem]";
  const currentFont = i18n.language === "ja" ? japanese : hind;
  return (
    <button
      className={`flex justify-center border-transparent border-2 items-center hover:border-2 hover:border-mainBlue text-center px-3 py-3 md:px-3 hover:bg-patternGray transition-colors duration-300 tracking-tighter text-[.8rem] xs:text-[.9rem]  
      ${additionalClassName}
      ${currentFont.className}
       ${
         bgColor
           ? bgColor + "text-fontGray hover:text-mainBlue"
           : "bg-mainYellow text-mainBlue"
       } `}
      disabled={isSubmitting}
      onClick={onClick}
    >
      <span className="leading-[100%]">{children}</span>
    </button>
  );
};

export default Button;
