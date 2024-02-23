import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../title/ErrorMessage";
import { hind } from "../../../font_family/font_family";

type InputProps = {
  children?: React.ReactNode;
  register: UseFormRegisterReturn<any>;
  errorMessage?: string;
  name: string;
  placeholder?: string;
  handleFocus?: (inputName: string) => void;
  handleBlur?: (inputName: string) => void;
};

const Input: React.FC<InputProps> = ({
  children,
  register,
  errorMessage,
  name,
  placeholder,
  handleFocus,
  handleBlur
}) => {
  return (
    <div className={`flex items-center gap-3 mt-6 md:m-0 ${hind.className}`}>
      {children && children}
      <div className="flex flex-col gap-2 w-full relative group z-0 mb-3">
        <input
          type="text"
          id={name}
          className={`rounded-none relative top-1 appearance-none peer w-full bg-transparent border-b  border-t-0 border-l-0 border-r-0 border-b-fontGray  text-fontGray px-1 sm:px-2 py-1 focus:outline-none h-[1.8rem] focus:border-mainYellow ${hind.className}`}
          placeholder=" "
          {...register}
          onFocus={() => handleFocus && handleFocus(name)}
          onBlur={() => handleBlur && handleBlur(name)}
        />
        <label
          htmlFor={name}
          className="ml-3 test-black origin-[0] -z-10  absolute duration-300 transform peer-placeholder-shown:scale-[90%] peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-5  text-fontGray peer-focus:text-mainYellow -translate-y-5  scale-75
       "
        >
          {name}
        </label>
        <div className="relative">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      </div>
    </div>
  );
};

export default Input;
