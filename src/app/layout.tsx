import "./globals.css";

import clsx from "clsx";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { openSans, ramettoOne } from "@/fonts";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Comments R Us",
  description: "Your one-stop shop for comments",
  icons: {
    shortcut: "/favicon.svg",
  },
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
