import React, { useRef } from "react";
import Image from "next/image";
import { roboto, rubik } from "../../font_family/font_family";

import DottedOutlineBox from "./box/DottedOutlineBox";
import SectionTitle from "./title/SectionTitle";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css/effect-coverflow";
import Section from "./box/Section";

import ReactCardFlip from "react-card-flip";
import Button from "./button/Button";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface FlippedState {
  [key: number]: boolean;
}

const Works = () => {
  const worksCardSwiperRef = useRef<SwiperRef>(null);
  const [isFlipped, setIsFlipped] = React.useState<FlippedState>({
    1: false,
    2: false,
    3: false
  });

  const flipCard = (index: number) => {
    setIsFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const isPc = useMediaQuery({
    query: "(min-width: 1025px)"
  });

  const isSM = useMediaQuery({
    query: "(max-width:640px)"
  });
  const workCards = [
    {
      title: "SmartRecipe",
      description:
        "A web application that enables users to easily search for recipes using  keywords and refine the search result by ingredients and diet type.",
      image: "/smartRecipe.webp",
      squareImage: "/smartRecipe_square.webp",
      fallBackImage: "/smartRecipe_square.png",
      techStack: ["React", "Redux", "Supabase", "Tailwind"],
      link: "https://smart-recipe-pearl.vercel.app/login",
      githubLink: "https://github.com/boooocchi/React-FinalProject"
    },
    {
      title: "SharEx.",
      description:
        "A web application where users can share their English vocabulary and its example sentences.",
      image: "/sharEx.webp",
      squareImage: "/sharEx_square.webp",
      fallBackImage: "/sharEx_square.png",
      techStack: ["React", "Next.js", "Typescript", "PostgreSQL"],
      link: "https://sharexapp.vercel.app/",
      githubLink: "https://github.com/boooocchi/Nodejs-FinalProject"
    },
    {
      title: "Snippets of my hazy-days",
      description:
        " A Blog website where users can store their snippets of the daily moments.",
      image: "/snippets_of_my_hazy_days.webp",
      squareImage: "/snippets_of_my_hazy_days_square.webp",
      fallBackImage: "/snippets_of_my_hazy_days_square.png",
      techStack: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "https://snippetsmyhazydays-boooocchi.vercel.app/",
      githubLink: "https://github.com/boooocchi/NodejsMidterm"
    }
  ];

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallBackImage: string
  ) => {
    e.currentTarget.src = fallBackImage;
    e.currentTarget.onerror = null;
  };

  const SwiperSlides = workCards.map((workCard, index) => {
    return (
      <SwiperSlide
        className={`swiper-slide work-slide swiper-slide--${index}`}
        key={index}
      >
        <h2
          className={`text-center text-mainYellow text-[.8rem] xs:text-[1.1rem] md:text-[1.2rem] mb-1 w-full tracking-tighter  ${rubik.className}`}
        >
          {workCard.title}
        </h2>
        <ReactCardFlip
          flipDirection="horizontal"
          isFlipped={isFlipped[index + 1]}
        >
          <div
            className="h-[330px] sm:h-[380px] lg:h-[450px]  flex flex-col items-center justify-start mt-0 card mx-auto "
            onClick={() => flipCard(index + 1)}
          >
            <img
              src={workCard.image}
              alt={workCard.title}
              className="h-full sm:h-[95%] w-auto hover:after:bg-[rgba(0,0,0,0.3)"
            />{" "}
          </div>
          <div
            className="h-[330px] sm:h-[380px] lg:h-[450px] aspect-[4/5] p-4 pt-3  lg:p-7 lg:pt-5 lg:pb-8 flex flex-col   bg-fontGray  card-back mx-auto relative"
            onClick={() => flipCard(index + 1)}
          >
            <span className="h-[10%] w-full flex justify-end mb-0 sm:mb-3">
              <Link
                href={workCard.githubLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="github"
                  className="w-[1.3rem] fill-mainBlack"
                >
                  <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                </svg>
              </Link>
            </span>
            <img
              src={`${workCard.squareImage}`}
              onError={(e) => {
                handleImageError(e, workCard.fallBackImage);
              }}
              alt={workCard.title}
              className=" h-[40%] aspect-[1/1] w-auto mx-auto"
            />
            <div
              className={`sm:mt-4 mt-2 flex flex-col justify-between h-[35%] text-mainBlack  ${roboto.className} text-[.8rem] w-full leading-[.9rem]`}
            >
              <p className="h-[60%]  max-xs:text-[.7rem]">
                {workCard.description}
              </p>
              <br />
              <h3 className="mb-3 text-[.7rem]">
                tech stach:
                <br />
                {workCard.techStack.map((tech, index) => (
                  <span key={index} className="text-[.7rem] xs:text-[.8rem]">
                    {tech}
                    {index !== workCard.techStack.length - 1 && ","}
                  </span>
                ))}
              </h3>
            </div>
            <Link
              href={workCard.link}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button additionalClass="w-full mt-auto">VISIT WEBSITE</Button>
            </Link>
          </div>
        </ReactCardFlip>
      </SwiperSlide>
    );
  });

  return (
    <Section bgColor="mainBlue" id="WORKS">
      <DottedOutlineBox>
        <div className="flex  items-center">
          <SectionTitle color="mainYellow">Works</SectionTitle>{" "}
          <p
            className={`${roboto.className} ml-5 sm:text-[.9rem] text-[.7rem] animate-bounce`}
          >
            &quot;swipe me!!&quot;
          </p>
        </div>
        <div className="flex justify-center items-center  h-[88%] relative ">
          <Swiper
            ref={worksCardSwiperRef}
            effect={isSM ? "slide" : "coverflow"}
            className="swiper work-swiper md:-mt-4"
            loop={true}
            mousewheel={true}
            modules={[EffectCoverflow]}
            centeredSlides={true}
            spaceBetween={isSM ? 10 : isPc ? -400 : -300}
            coverflowEffect={
              !isSM
                ? {
                    rotate: 10,
                    stretch: 10,
                    depth: isPc ? 1000 : 500,
                    modifier: 2,
                    slideShadows: false
                  }
                : {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false
                  }
            }
            pagination={{
              el: "#containerForBullets",
              type: "bullets",
              bulletClass: "work-swiper-bullet",
              bulletActiveClass: "work-swiper-bullet-active",
              clickable: true
            }}
          >
            {SwiperSlides}
          </Swiper>
          <div className="hover:scale-125  absolute -left-3 sm:left-[5%] lg:left-[15%] top-[45%] z-10 bg-[rgba(0,0,0,0.5)] rounded-sm p-1 flex justify-center items-center duration-100">
            <button
              className=" hover:transform animate-transform drop-shadow-2xl"
              onClick={() => worksCardSwiperRef?.current?.swiper?.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={isSM ? "1.8rem" : "2rem"}
                viewBox="0 0 448 512"
                fill="#ddd"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
          </div>
          <div className=" hover:scale-125 duration-100 absolute -right-3 sm:right-[5%] lg:right-[15%] top-[45%] z-10 bg-[rgba(0,0,0,0.5)] rounded-sm p-1 flex justify-center items-center">
            <button
              className="hover:transform hover:scale-115 animate-transform duration-100 drop-shadow-2xl"
              onClick={() => worksCardSwiperRef?.current?.swiper?.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={isSM ? "1.8rem" : "2rem"}
                viewBox="0 0 448 512"
                className="text-fontGray"
                fill="#ddd"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
      </DottedOutlineBox>
    </Section>
  );
};

export default Works;
