import React, { useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/section/Hero";
import Header from "@/components/layout/Header";
import AboutMe from "@/components/section/AboutMe";
import Contact from "@/components/section/Contact";
import Skill from "@/components/section/Skill";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Project from "@/components/section/Project";
import VerticalLink from "@/components/button/VerticalLink";

const PcLayout = () => {
  const [activePageNumber, setActivePageNumber] = React.useState(0);
  React.useState<React.ReactNode>(null);

  const pagination = {
    clickable: true,
    paginationBulletRender: function (
      _swiper: any,
      _index: any,
      className: any
    ) {
      return (
        '<span class=" ' +
        className +
        "dotContainer" +
        '"><div class="inner-dot"></div></div>'
      );
    }
  };

  const [swiper, setSwiper] = React.useState<SwiperClass | null>(null);

  const handlePageSwipe = (number: number) => {
    if (swiper) {
      swiper.slideTo(number);
    }
  };

  const handleSlideChange = (swiperInstance: any) => {
    if (swiperInstance) setActivePageNumber(swiperInstance.activeIndex);
  };

  return (
    <div className=" max-w-[1500px] mx-auto relative ">
      <>
        <VerticalLink activePageNumber={activePageNumber} />
        <Header swiper={handlePageSwipe} activePageNumber={activePageNumber} />
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={0}
          mousewheel={true}
          slidesPerView={1}
          direction={"vertical"}
          modules={[Pagination, Mousewheel]}
          pagination={pagination}
          className="vertical-swiper"
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <AboutMe />
          </SwiperSlide>
          <SwiperSlide>
            <Skill />
          </SwiperSlide>
          <SwiperSlide>
            <Project activePageNumber={activePageNumber} />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default PcLayout;
