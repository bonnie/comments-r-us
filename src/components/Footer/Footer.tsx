import clsx from "clsx";
import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ ...delegated }: React.ComponentProps<"footer">) => {
  return (
    <footer className={clsx(styles.wrapper, "body-text")} {...delegated}>
      <p>
        Visit{" "}
        <a href="https://bonnie.dev" target="_blank">
          bonnie.dev
        </a>
      </p>
      <p>for more good stuff</p>
    </footer>
  );
};

export default Footer;
