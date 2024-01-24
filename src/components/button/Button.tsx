import React from "react";
import { roboto, japanese } from "../../../font_family/font_family";

import { useTranslation } from "next-i18next";
type ButtonProps = {
  children: React.ReactNode;
  isSubmitting?: boolean;
  additionalClass?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isSubmitting,
  additionalClass,
  onClick
}) => {
  const { i18n } = useTranslation();
  const additionalClassName = additionalClass
    ? additionalClass
    : "md:w-[9rem] w-[7rem]";
  const currentFont = i18n.language === "ja" ? japanese : roboto;
  return (
    <button
      className={`text-white border-transparent bg-mainBlue text-center px-2 py-2 md:px-3 md:py-2 hover:bg-fontGray hover:text-mainBlue duration-300 border-2 hover:border-mainBlue ${additionalClassName} ${currentFont.className} tracking-[0.1px] text-[.8rem] xs:text-[.9rem]`}
      disabled={isSubmitting}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
