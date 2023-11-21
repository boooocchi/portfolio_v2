import React from "react";
import { rubik, roboto } from "../../font_family/font_family";
import Button from "./button/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" w-full bg-hero_bg_image bg-cover bg-center bg-no-repeat flex items-center h-full  min-h-[700px] mx-auto">
      <div className="mx-auto w-4/5 py-[15%] flex">
        <div className="w-1/2">
          <h1 className="text-mainBlue text-[5rem] xl:text-[7rem] tracking-tighter leading-[90px]">
            <span className={rubik.className}>FRONTEND DEVELOPER.</span>
          </h1>
          <h3 className={`${roboto.className} text-mainBlue`}>
            Hi, I&apos;m Kota, a Vancouver based Frontend developer.
          </h3>
          <div className="mt-5">
            <Link href="https://drive.google.com/file/d/1zGk1q_65QM8ZBTvfsRbpM9jmQs3PFGK6/view?usp=sharing">
              <Button>Resume</Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
