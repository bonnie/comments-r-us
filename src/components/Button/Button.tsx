import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "filled" | "outline";
}

function Button({
  variant = "filled",
  className,
  children,
  ...delegated
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.wrapper, styles[variant], className)}
      {...delegated}
    >
      {children}
    </button>
  );
}
export default Button;
