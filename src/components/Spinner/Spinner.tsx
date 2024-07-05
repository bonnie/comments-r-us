import { Loader } from "lucide-react";
import React from "react";

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Spinner.module.css";

export interface SpinnerProps {}

function Spinner({}: SpinnerProps) {
  return (
    <div className={styles.wrapper}>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <Loader size={48} className={styles.loader} />
    </div>
  );
}

export default Spinner;
