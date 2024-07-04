"use client";
import React from "react";

import ClientComments from "@/components/ClientComments";

import styles from "./page.module.css";

export default function ClientOnly() {
  return (
    <div className={styles.wrapper}>
      <ClientComments />
    </div>
  );
}
