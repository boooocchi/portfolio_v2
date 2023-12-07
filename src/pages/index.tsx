import React, { useEffect } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";
import PcLayout from "@/components/PcLayout";
import TabletLayout from "@/components/TabletLayout";
import { useTranslation } from "next-i18next";

export default function Home() {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
