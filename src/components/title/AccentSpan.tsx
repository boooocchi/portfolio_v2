import React from "react";
import { hind } from "../../../font_family/font_family";
import { useTranslation } from "react-i18next";

type AccentSpanProps = {
  children: React.ReactNode;
};

const AccentSpan: React.FC<AccentSpanProps> = ({ children }) => {
  const { i18n } = useTranslation();
  console.log(i18n.language);

  const fontSize =
    i18n.language === "en"
      ? "lg:text-[1.2rem] sm:text-[1.1rem] text-[1rem]"
      : "lg:text-[1.1rem] sm:text-[1rem] text-[0.9rem]";

  return (
    <span
      className={`text-mainBlue font-bold ${fontSize} drop-shadow-sm  underline ${hind.className}`}
    >
      {children}
    </span>
  );
};

export default AccentSpan;
