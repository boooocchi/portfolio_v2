import React from "react";

import DottedOutlineBox from "./box/DottedOutlineBox";
import Section from "./box/Section";

import { roboto, japanese } from "../../font_family/font_family";
import SectionTitle from "./title/SectionTitle";

import AccentSpan from "./title/AccentSpan";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n } = useTranslation();

  return (
    <Section bgColor="mainBlue" id="ABOUT">
      <DottedOutlineBox lineColor="fontGray">
        <div className="mb-2">
          <SectionTitle color="mainYellow">ABOUT ME</SectionTitle>
          {i18n.language === "ja" ? (
            <>
              <p
                className={`${japanese.className} mt-0 lg:mt-3 md:mb-8 mb-6 leading-[1.2rem]  sm:leading-7 text-fontGray lg:text-[1.1rem] sm:text-[1rem] text-[.8rem]`}
              >
                フロントエンドデベロッパーとして、日々勉強を続けています。
                <br />
                主に
                <AccentSpan>React</AccentSpan> と
                <AccentSpan>Typescript</AccentSpan>を使って開発しています。
                <br />
                <AccentSpan>素早い問題解決能力</AccentSpan>
                と、チーム環境で生きる
                <AccentSpan>
                  高いコミュニケーション能力
                </AccentSpan>が強みです。 <br />
                常に新しいテクノロジーを学び、新しい開発に活かしています！
              </p>
              <SectionTitle color="mainYellow">A little story</SectionTitle>
              <p
                className={`${japanese.className} leading-[1.2rem] lg:text-[1.1rem]  sm:leading-7 sm:text-[1rem] text-[.8rem] mt-0  lg:mt-3 mb-5 text-fontGray`}
              >
                エンジニアの勉強を始める以前は、 <br />
                日本の伝統ある会社で<AccentSpan>営業として</AccentSpan>
                働いていました。 <br />
                (恥ずかしながら、その時はほとんどパソコンを触ることがありませんでした...)
                <br />
                元々ウェブ開発の分野に興味があり、コロナのパンデミックを機に勉強をスタート。
                <br />
                2022年には初めてブログサイトをhtmlで作成しました。 <br />
                この経験を皮切りに開発を学び続け、現在はカナダで活動しております。
              </p>
            </>
          ) : (
            <>
              <p
                className={`${roboto.className} mt-0 lg:mt-3 md:mb-8 mb-6 leading-[1.2rem]  sm:leading-6 text-fontGray lg:text-[1.1rem] sm:text-[1rem] text-[.8rem]`}
              >
                Highly motivated frontend web developer with strong focus on
                <AccentSpan>React</AccentSpan> and
                <AccentSpan>Typescript</AccentSpan>
                . <br /> Excels at problem-solving and working collaboratively
                in a team environment. <br />I am also always
                <AccentSpan>open to new technologies</AccentSpan>
                !!
              </p>
              <SectionTitle color="mainYellow">A little story</SectionTitle>
              <p
                className={`${roboto.className} leading-[1.2rem] lg:text-[1.1rem]  sm:leading-6 sm:text-[1rem] text-[.8rem] mt-0  lg:mt-3 mb-5 text-fontGray`}
              >
                Prior to my foray into the world of web development, <br />I
                worked as a <AccentSpan>Japanese salesman</AccentSpan> for an
                old incense company in Kyoto, Japan. <br /> (I barely used my
                laptop back then...) <br /> However, my fascination with website
                creation prompted me <br />
                to step out of my comfort zone and develop my first blog site in
                2022. <br /> This experience ultimately led me to Canada, where
                I am now, pursuing my passion for coding.
              </p>
            </>
          )}
        </div>
        <div className="flex justify-end mt-auto">
          <div className="flex gap-4 xs:gap-5 items-center  relative">
            <p
              className={`w-[150%] absolute left-1/2 -translate-x-1/2 -top-5 sm:-top-6 text-center ${roboto.className} tracking-tighter xs:text-[.7rem] sm:text-[.8rem] text-[.6rem]`}
            >
              \visit me!!/
            </p>
            <Link
              href="https://www.linkedin.com/in/kota-ito-%EF%BC%A0041212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 100 100"
                id="linkedin"
                className="h-[1.55rem] sm:h-[1.7rem] md:h-[2rem] fill-white hover:scale-110 duration-300"
              >
                <path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/boooocchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
                className="h-[1.4rem] sm:h-[1.5rem] md:h-[1.8rem] hover:scale-110 duration-300"
                fill="white"
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </DottedOutlineBox>
    </Section>
  );
};

export default About;
