import React from "react";
import Image from "next/image";

import { SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import ReactCardFlip from "react-card-flip";
import Button from "../button/Button";
import { useMediaQuery } from "react-responsive";
import { hind, rubik } from "../../../font_family/font_family";

interface FlippedState {
  [key: number]: boolean;
}

export const useSwiperPropjectSlides = () => {
  const isSM = useMediaQuery({
    query: "(max-width:640px)"
  });
  const workCards = [
    {
      title: "Hang in There",
      description:
        "A web application where users can store their favorite pieces of clothing and outfits.",
      image: "/image/work/hang_in_there.webp",
      fallBackImage: "/image/work/hang_in_there.png",
      squareImage: "/image/work/hang_in_there_square.webp",
      fallBackImageSquare: "/image/work/hang_in_there_square.png",
      techStack: ["React", "Next.js", "GraphQL", "Apollo Server", "PostgreSQL"],
      link: "https://hang-in-there.vercel.app/",
      githubLink: "https://github.com/boooocchi/Hang_in_There"
    },
    {
      title: "SmartRecipe",
      description:
        "A web app that lets users search for recipes by keywords and refine results by ingredients and diet type.",
      image: "/image/work/smartRecipe.webp",
      fallBackImage: "/image/work/smartRecipe.png",
      squareImage: "/image/work/smartRecipe_square.webp",
      fallBackImageSquare: "/image/work/smartResipe_square.png",
      techStack: ["React", "Redux", "Supabase", "Tailwind"],
      link: "https://smart-recipe-pearl.vercel.app/login",
      githubLink: "https://github.com/boooocchi/React-FinalProject"
    },
    {
      title: "SharEx.",
      description:
        "A web application where users can share their English vocabulary and its example sentences.",
      image: "/image/work/sharEx.webp",
      fallBackImage: "/image/work/sharEx.png",
      squareImage: "/image/work/sharEx_square.webp",
      fallBackImageSquare: "/image/work/SharEx_square.png",
      techStack: ["React", "Next.js", "Typescript", "PostgreSQL"],
      link: "https://sharexapp.vercel.app/",
      githubLink: "https://github.com/boooocchi/Nodejs-FinalProject"
    }
  ];

  const [isFlipped, setIsFlipped] = React.useState<FlippedState>({
    1: false,
    2: false,
    3: false
  });

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallBackImage: string
  ) => {
    e.currentTarget.src = fallBackImage;
    e.currentTarget.onerror = null;
  };

  const projectCards = (
    <>
      {workCards.map((workCard, index) => (
        <SwiperSlide
          className={`swiper-slide work-slide swiper-slide--${index} my-no-swiping-class`}
          key={index}
        >
          <h2
            className={`text-center text-mainBlue text-[.8rem] xs:text-[1.1rem] md:text-[1.2rem] mb-1 w-full tracking-tighter  ${rubik.className}`}
          >
            {workCard.title}
          </h2>
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped[index + 1]}
          >
            <div
              className="h-[330px] sm:h-[380px] lg:h-[450px]  flex flex-col aspect-[4/5] items-center justify-start mt-0 card mx-auto cursor-pointer"
              onClick={() =>
                setIsFlipped((prev) => ({
                  ...prev,
                  [index + 1]: !prev[index + 1]
                }))
              }
            >
              <div className="h-full w-full hover:after:bg-[rgba(0,0,0,0.3) relative">
                <Image
                  src={workCard.image}
                  alt={workCard.title}
                  style={{ objectFit: "fill" }}
                  fill={true}
                  onError={(e) => {
                    handleImageError(e, workCard.fallBackImage);
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="h-[330px] sm:h-[380px] lg:h-[450px] aspect-[4/5] p-4 pt-3 lg:p-7 lg:pt-5 lg:pb-8 flex flex-col bg-white  mx-auto relative cursor-pointer"
              onClick={() =>
                setIsFlipped((prev) => ({
                  ...prev,
                  [index + 1]: !prev[index + 1]
                }))
              }
            >
              <span className="h-[10%] w-full flex justify-end mb-0 sm:mb-1">
                <Link
                  href={workCard.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the repository of ${workCard.title}`}
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
              <div className="h-[40%] aspect-[1/1] w-auto mx-auto relative mb-1">
                <Image
                  src={workCard.squareImage}
                  style={{ objectFit: "fill" }}
                  onError={(e) => {
                    handleImageError(e, workCard.fallBackImage);
                  }}
                  alt={workCard.title}
                  fill={true}
                  loading="lazy"
                />
              </div>

              <div
                className={`sm:mt-2 mt-1 flex flex-col h-[50%] text-mainBlack justify-between ${hind.className} w-full leading-tight`}
              >
                <p className="max-xs:text-[.9rem]">{workCard.description}</p>
                <div className="mb-1 sm:mb-1 text-[.8rem] flex flex-col gap-1">
                  <span className={isSM ? "hidden" : "flex"}>-tech stach-</span>
                  <div className="whitespace-normal w-full">
                    {workCard.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block text-center text-[.8rem] bg-patternGray p-1 px-2 mb-1 mr-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
      ))}
    </>
  );

  return {
    projectCards
  };
};
