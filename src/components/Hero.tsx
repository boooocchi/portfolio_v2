import React from "react";
import { rubik, roboto, japanese } from "../../font_family/font_family";
import Button from "./button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
const Hero = ({}) => {
  const heroTitle1 = ["F", "R", "O", "N", "T", "E", "N", "D"];
  const heroTitle2 = ["D", "E", "V", "E", "L", "O", "P", "E", "R"];

  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const currentFont = i18n.language === "ja" ? japanese : roboto;

  return (
    <div className="w-full h-full flex items-center" id="hero">
      <section className=" w-full bg-hero_bg_image_tablet md:bg-hero_bg_image  bg-cover  bg-center max-lg:bg- bg-no-repeat flex items-center h-full  min-h-[600px] max-h-[900px] aspect-[3/4] md:aspect-auto md:min-h-[700px]  mx-auto">
        <div className="mx-auto w-[85%] md:w-4/5  flex">
          <div className="w-full md:w-1/2 mb-[7rem] md:m-0">
            <h1 className="text-mainBlue text-[11vw] sm:text-[4.5rem] md:text-[5.5rem] lg:[6rem] xl:text-[7rem] tracking-tighter leading-[9vw] sm:leading-[70px] md:leading-[90px] max-xs:mt-10 drop-shadow-lg">
              <div className={`${rubik.className} flex flex-col`}>
                <div className="flex ">
                  {heroTitle1.map((letter, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          rotate: `${
                            index % 2 === 0
                              ? index % 4 === 0
                                ? "-90"
                                : "90"
                              : index % 3 === 0
                              ? "90"
                              : "-90"
                          }`,

                          x: `${index % 2 === 0 ? "-100%" : "0%"}`,
                          y: `${index % 2 !== 0 ? "-100%" : "0%"}`
                        }}
                        animate={{
                          opacity: 1,
                          rotate: "0",

                          x: "0",
                          y: "0"
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05,
                          type: `${
                            index === heroTitle1.length - 1 ? "spring" : "tween"
                          }`,
                          stiffness: 200
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.div>
                    );
                  })}
                </div>
                <div className="flex">
                  {heroTitle2.map((letter, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          rotate: `${
                            index % 2 === 0
                              ? index % 4 === 0
                                ? "-90"
                                : "90"
                              : index % 3 === 0
                              ? "90"
                              : "-90"
                          }`,

                          x: `${index % 2 === 0 ? "-100%" : "0%"}`,
                          y: `${index % 2 !== 0 ? "-100%" : "0%"}`
                        }}
                        animate={{
                          opacity: 1,
                          rotate: "0",

                          x: "0",
                          y: "0"
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05,
                          type: `${
                            index === heroTitle2.length - 1 ? "spring" : "tween"
                          }`,
                          stiffness: 100
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </h1>
            <motion.h3
              className={`${currentFont.className} mt-1 leading-[0.9rem]   sm:leading-1 md:leading-6 text-mainBlue text-[.8rem] sm:text-[1.1rem] w-[95%]`}
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {t("hero.description")}
            </motion.h3>
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link
                href="https://drive.google.com/file/d/1TwaLWXM29RUKLkFSjQZsI6g7E7A9HUKT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{t("common:resume")}</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
