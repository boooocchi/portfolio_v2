import React, { useRef } from "react";
import { japanese, hind } from "../../../font_family/font_family";

import DottedOutlineBox from "../layout/DottedOutlineBox";
import SectionTitle from "../title/SectionTitle";

import { Swiper, SwiperRef } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";

import "swiper/css/effect-coverflow";
import Section from "../layout/Section";

import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
import { useSwiperPropjectSlides } from "../cards/SwiperProjectCards";

const Project: React.FC<{ activePageNumber?: number }> = ({
  activePageNumber
}) => {
  const { t } = useTranslation("common");
  const worksCardSwiperRef = useRef<SwiperRef>(null);

  //useMediaQUery
  const isPc = useMediaQuery({
    query: "(min-width: 1025px)"
  });

  const isSM = useMediaQuery({
    query: "(max-width:640px)"
  });

  const { projectCards } = useSwiperPropjectSlides();

  const { i18n } = useTranslation();
  const currentFont = i18n.language === "ja" ? japanese : hind;

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activePageNumber === 3 || !activePageNumber) {
      timer = setInterval(() => {
        worksCardSwiperRef.current?.swiper?.mousewheel.enable();
      }, 900);
    }
    return () => {
      clearInterval(timer);
      worksCardSwiperRef.current?.swiper?.mousewheel.disable();
    };
  }, [activePageNumber]);

  return (
    <Section bgColor="patternGray" id="PROJECT">
      <DottedOutlineBox lineColor="mainBlue">
        <div className="flex  items-center">
          <SectionTitle color="mainBlue">PROJECT</SectionTitle>{" "}
          <p
            className={`${currentFont.className} text-mainBlue ml-5 sm:text-[.9rem] text-[.8rem] animate-bounce`}
          >
            &quot;{t("work.swipeMe")}&quot;
          </p>
        </div>
        <div className="flex justify-center items-center  h-[88%] relative ">
          <Swiper
            nested={true}
            ref={worksCardSwiperRef}
            effect={isSM ? "slide" : "coverflow"}
            className="swiper work-swiper md:-mt-4"
            loop={true}
            mousewheel={false}
            modules={[EffectCoverflow, Mousewheel]}
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
          >
            {projectCards}
          </Swiper>
          <div className="hover:scale-125  absolute -left-3 sm:left-[5%] lg:left-[15%] top-[45%] z-10 bg-mainBlue rounded-sm p-1 flex justify-center items-center duration-100">
            <button
              className="hover:transform animate-transform drop-shadow-2xl"
              onClick={() => worksCardSwiperRef?.current?.swiper?.slidePrev()}
              aria-label="Previous card"
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
          <div className=" hover:scale-125 duration-100 absolute -right-3 sm:right-[5%] lg:right-[15%] top-[45%] z-10 bg-mainBlue rounded-sm p-1 flex justify-center items-center">
            <button
              className="hover:transform hover:scale-115 animate-transform duration-100 drop-shadow-2xl"
              onClick={() => worksCardSwiperRef?.current?.swiper?.slideNext()}
              aria-label="Next card"
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

export default Project;
