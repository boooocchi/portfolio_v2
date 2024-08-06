import React, { useEffect } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";
import PcLayout from "@/components/layout/PcLayout";
import TabletLayout from "@/components/layout/TabletLayout";
import { GetServerSidePropsContext } from "next";

import nextI18nextConfig from "../../next-i18next.config";
import Head from "next/head";

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

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the online portfolio of Kota Ito, a professional front-end developer specializing in Typescript and React.js. Interested in collaborating? Check out my projects!"
        />
      </Head>
      <main className="bg-mainBlue relative ">{componentStructure}</main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locale = context.req.cookies["NEXT_LOCALE"];
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["common"],
        nextI18nextConfig,
        ["en", "ja"]
      ))
    }
  };
}
