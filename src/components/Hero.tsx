import React from "react";
import { rubik, roboto } from "../../font_family/font_family";
import Button from "./button/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-full flex items-center">
      <section className=" w-full bg-hero_bg_image_tablet md:bg-hero_bg_image  bg-cover  bg-center max-lg:bg- bg-no-repeat flex items-center h-full  min-h-[600px] max-h-[900px] aspect-[3/4] md:aspect-auto md:min-h-[700px]  mx-auto">
        <div className="mx-auto w-[85%] md:w-4/5  flex">
          <div className="w-full md:w-1/2 mb-[7rem] md:m-0">
            <h1 className="text-mainBlue text-[10vw] sm:text-[4.5rem] md:text-[5.5rem] lg:[6rem] xl:text-[7rem] tracking-tighter leading-[9vw] sm:leading-[70px] md:leading-[90px] max-xs:mt-10">
              <span className={rubik.className}>FRONTEND DEVELOPER.</span>
            </h1>
            <h3
              className={`${roboto.className} mt-1 leading-[0.8rem]  sm:leading-1 md:leading-5 text-mainBlue text-[.7rem] sm:text-[1.1rem]`}
            >
              Hi, I&apos;m Kota, a Vancouver based Frontend developer.
            </h3>
            <div className="mt-5">
              <Link href="https://drive.google.com/file/d/1zGk1q_65QM8ZBTvfsRbpM9jmQs3PFGK6/view?usp=sharing">
                <Button>Resume</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
