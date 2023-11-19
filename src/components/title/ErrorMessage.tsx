import React from "react";
import { roboto } from "../../../font_family/font_family";

type ErrorMessageProps = {
  children: React.ReactNode;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <p
      className={`text-accentOrange ${roboto.className} font-light text-[0.8rem]`}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
