import { Roboto_Mono } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";

export const roboto = Roboto_Mono({
  weight: ["400", "600"],
  subsets: ["latin"]
});

export const rubik = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"]
});

export const japanese = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["latin"]
});
