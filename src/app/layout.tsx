import "./globals.css";

import clsx from "clsx";
import type { Metadata } from "next";
import { Open_Sans, Rammetto_One } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./layout.module.css";

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
export const metadata: Metadata = {
  title: "Comments R Us",
  description: "Your one-stop shop for comments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(openSans.variable, ramettoOne.variable)}>
        <Header />
        <main className={clsx(styles.main, "body-text")}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
