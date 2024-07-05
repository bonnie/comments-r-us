// based on https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
import React from "react";

import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({
  children,
  ...delegated
}: React.ComponentProps<"span">) {
  return (
    <span className={styles.wrapper} {...delegated}>
      {children}
    </span>
  );
}

export default VisuallyHidden;
