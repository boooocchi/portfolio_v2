import React from "react";

type sectionProps = {
  children: React.ReactNode;
  bgColor: string;
  id: string;
};

const Section: React.FC<sectionProps> = ({ children, bgColor, id }) => {
  let sectionClassName =
    "w-full lg:h-screen h-[720px]  bg-mainBlue flex items-center justify-center mt-auto";
  if (bgColor === "patternGray") {
    sectionClassName =
      "w-full lg:h-screen h-[720px]   bg-patternGray flex items-center justify-center mt-auto";
  }

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  );
};

export default Section;
