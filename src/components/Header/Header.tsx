import clsx from "clsx";
import Image from "next/image";
import React from "react";

import styles from "./Header.module.css";

export interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header className={clsx(styles.wrapper, "display-text")}>
      Comments{" "}
      <Image
        src="/r-comment.png"
        width={56}
        height={56}
        alt="the letter R, playfully tilted with a comment-shaped opening"
        className={styles.image}
      ></Image>{" "}
      Us
    </header>
  );
}

export default Header;