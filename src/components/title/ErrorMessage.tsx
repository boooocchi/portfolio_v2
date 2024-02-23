import React from "react";
import { hind } from "../../../font_family/font_family";

type ErrorMessageProps = {
  children: React.ReactNode;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <p
      className={`text-accentOrange ${hind.className} font-light text-[0.8rem] absolute top-0 left-1`}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
