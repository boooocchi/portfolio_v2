import React from "react";
import Image from "next/image";
import { rubik } from "../../../font_family/font_family";

import { SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";

const SwiperSlideCards = () => {
  const workCards = [
    {
      title: '"SmartRecipe"',
      description:
        "A web application that enables users to easily search for recipes using relevant keywords and refine the search result by specifying the ingredients and diet type.",
      image: "/smartRecipe.webp"
    },
    {
      title: '"SharEx."',
      description:
        "A web application where users can share their English vocabulary and its example sentences. It's a personal vocabulary note app but also users can contribute to a global community of English learners.",
      image: "/sharEx.webp"
    },
    {
      title: '"Snippets of my hazy days"',
      description:
        " A Blog website where users can store their snippets of the daily moments.",
      image: "/snippets_of_my_hazy_days.webp"
    }
  ];

  const cards = workCards.map((workCard, index) => (
    <SwiperSlide
      className={`swiper-slide work-slide swiper-slide--${index}`}
      key={index}
    >
      <div className="w-[600px] flex flex-col items-center">
        <h2
          className={`text-center text-mainBlue text-[1.5rem] mb-5  ${rubik.className}`}
        >
          {workCard.title}
        </h2>
        <Image
          src={workCard.image}
          width={300}
          height={250}
          alt={workCard.title}
          className="rounded-lg grayscale "
        />{" "}
        <p className={`w-[70%] mt-7 text-black`}>{workCard.description}</p>
      </div>
    </SwiperSlide>
  ));

  return <>{cards}</>;
};

export default SwiperSlideCards;
