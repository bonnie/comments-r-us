import { Open_Sans, Rammetto_One } from "next/font/google";

export const ramettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
});
