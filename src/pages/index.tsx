import React, { useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

import { useMediaQuery } from "react-responsive";
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
import VerticalLink from "@/components/VerticalLink";
import PcLayout from "@/components/PcLayout";
import TabletLayout from "@/components/TabletLayout";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const [componentStructure, setComponentStructure] =
    React.useState<React.ReactNode>(null);

  useEffect(() => {
    if (isTablet) {
      setComponentStructure(<TabletLayout />);
    } else {
      setComponentStructure(<PcLayout />);
    }
  }, [isTablet]);

  return <main className="bg-mainBlue relative ">{componentStructure}</main>;
}
