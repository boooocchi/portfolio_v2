import React from "react";

type sectionProps = {
  children: React.ReactNode;
  bgColor: string;
  id: string;
};

const Section: React.FC<sectionProps> = ({ children, bgColor, id }) => {
  let sectionClassName =
    "w-full lg:h-screen h-[700px]  bg-mainBlue flex items-center justify-center mt-auto";
  if (bgColor === "mainYellow") {
    sectionClassName =
      "w-full lg:h-screen h-[700px]   bg-mainYellow flex items-center justify-center mt-auto";
  }

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  );
};

export default Section;
