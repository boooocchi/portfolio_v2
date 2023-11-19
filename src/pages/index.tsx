import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
// Import Swiper React components
import {
  Swiper,
  SwiperClass,
  SwiperRef,
  SwiperSlide,
  useSwiperSlide
} from "swiper/react";
import { Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Works from "@/components/Works";
import VerticalLink from "@/components/verticalLink";

export default function Home() {
  const [activePageNumber, setActivePageNumber] = React.useState(0);

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
    swiper?.slideTo(number);
  };

  const handleSlideChange = (swiperInstance: any) => {
    console.log(swiperInstance.activeIndex);
    setActivePageNumber(swiperInstance.activeIndex);
  };
  return (
    <main className="bg-mainBlue relative">
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
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Works />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
