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
      className={`flex justify-center border-transparent border-2 items-center hover:border-2 hover:border-mainBlue ${
        bgColor ? bgColor : "bg-mainYellow"
      } text-center px-3 py-2 md:px-3 hover:bg-patternGray ${
        bgColor ? "text-fontFray hover:text-mainBlue" : "text-mainBlue"
      } transition-colors duration-300  ${additionalClassName} ${
        currentFont.className
      } tracking-tighter text-[.8rem] xs:text-[.9rem]`}
      disabled={isSubmitting}
      onClick={onClick}
    >
      <span className="mt-[0.5px]">{children}</span>
    </button>
  );
};

export default Button;
