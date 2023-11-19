import React from "react";
import { rubik, roboto } from "../../font_family/font_family";

const Hero = () => {
  return (
    <section className="bg-hero_bg_image bg-cover bg-center bg-no-repeat flex items-center h-full min-w-full min-h-[700px]">
      <div className="mx-auto w-4/5 py-[15%] flex">
        <div className="w-1/2">
          <h1 className="text-mainBlue text-[5rem] xl:text-[7rem] tracking-tighter leading-[90px]">
            <span className={rubik.className}>FRONTEND DEVELOPER.</span>
          </h1>
          <h3 className={`${roboto.className} text-mainBlue`}>
            Hi, I&apos;m Kota, a Vancouver based Frontend developer.
          </h3>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
