import React from "react";

type sectionProps = {
  children: React.ReactNode;
  bgColor: string;
  id: string;
};

const Section: React.FC<sectionProps> = ({ children, bgColor, id }) => {
  let sectionClassName =
    "w-full md:h-screen min-h-[700px] md:min-h-[800px] bg-mainBlue flex items-center justify-center mt-auto";
  if (bgColor === "mainYellow") {
    sectionClassName =
      "w-full md:h-screen min-h-[700px] md:min-h-[800px]  bg-mainYellow flex items-center justify-center mt-auto";
  }

  return (
    <section className={sectionClassName} id={id}>
      {children}
    </section>
  );
};

export default Section;
