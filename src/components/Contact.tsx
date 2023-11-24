import React, { useRef } from "react";
import DottedOutlineBox from "./box/DottedOutlineBox";
import Section from "./box/Section";

import SectionTitle from "./title/SectionTitle";
import Input from "./input/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../validation/contactValidation";
import ErrorMessage from "./title/ErrorMessage";

import emailjs from "@emailjs/browser";

import { FieldErrors, FieldValue, FieldValues, useForm } from "react-hook-form";
import Button from "./button/Button";
import { useMediaQuery } from "react-responsive";

type ContactFormValues = {
  name: string;
  email?: string;
  number?: string;
  message: string;
};

interface CustomErrors extends FieldErrors<ContactFormValues> {
  eitherEmailorNumber?: {
    message: string;
    type: string;
    ref?: any;
  };
}

const Contact = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 820px)"
  });
  const [isFocused, setIsFocused] = React.useState({
    name: false,
    email: false,
    number: false,
    message: false
  });

  const handleFocus = (inputName: string) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName: string) => {
    setIsFocused((prev) => ({ ...prev, [inputName]: false }));
  };

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: ""
    },
    resolver: yupResolver(contactSchema)
  });
  const { register, handleSubmit, formState } = form;
  const errors: CustomErrors = formState.errors;
  const { isSubmitting, isSubmitSuccessful } = formState;

  const formRef = useRef(null);

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);

    if (formRef.current && process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
          "template_2riojqf",
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const SubmitButtonText = () => {
    return isSubmitting ? (
      <span>
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="rgb(246, 70, 0)"
          />
        </svg>
        Sending...
      </span>
    ) : (
      <span className=" text-center px-3 py-2 ">SUBMIT</span>
    );
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset();
    }
  });

  const iconColor = isFocused.name ? "stroke-accentOrange" : "stroke-mainBlack";
  const iconColor2 = isFocused.email
    ? "stroke-accentOrange"
    : "stroke-mainBlack";
  const iconColor3 = isFocused.number
    ? "stroke-accentOrange"
    : "stroke-mainBlack";

  return (
    <Section bgColor="mainYellow" id="CONTACT">
      <DottedOutlineBox lineColor="mainBlack">
        <SectionTitle color="mainBlue">Contact</SectionTitle>
        <div className="w-full h-full relative ">
          <form
            className="flex max-md:flex-col md:h-full md:gap-[10%] gap-[5%] md:justify-center md:items-center md:max-h-[400px]"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className="w-full  md:w-[35%] flex flex-col md:justify-between md:pt-5 inputContainer">
              <Input
                register={register("name")}
                errorMessage={errors.name?.message}
                name="name"
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 md:w-7 md:h-7 ${iconColor} duration-300 font-bold`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Input>
              <Input
                register={register("email")}
                errorMessage={errors.eitherEmailorNumber?.message}
                name="email"
                placeholder="email"
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className={`w-6 h-6 md:w-7 md:h-7 ${iconColor2} duration-300 font-bold`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Input>
              <Input
                register={register("number")}
                name="number"
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className={`w-6 h-6 md:w-7 md:h-7 ${iconColor3} duration-300 font-bold`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </Input>
              {!isTablet && (
                <div className={`bottom-0  flex justify-end w-full`}>
                  <Button isSubmitting={isSubmitting}>
                    <SubmitButtonText />
                  </Button>
                </div>
              )}
            </div>
            <div className="w-full md:w-[57%] flex flex-col justify-center items-center h-full ">
              <textarea
                className="h-[12rem] md:h-full  w-full bg-fontGray p-3 md:p-8  text-mainBlack  focus:outline-accentOrange mt-10 md:mt-0 rounded-none"
                placeholder="Please write your message here."
                {...register("message")}
              />
              <ErrorMessage>{errors.message?.message}</ErrorMessage>
            </div>
            {isTablet && (
              <div className={` w-full`}>
                <Button
                  isSubmitting={isSubmitting}
                  additionalClass="w-full mt-3"
                >
                  <SubmitButtonText />
                </Button>
              </div>
            )}
          </form>
        </div>
      </DottedOutlineBox>
    </Section>
  );
};

export default Contact;
