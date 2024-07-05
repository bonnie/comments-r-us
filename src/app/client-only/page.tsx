"use client";

import React from "react";

import Separator from "@/components/Separator";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";
import styles from "./page.module.css";

export default function ClientOnly() {
  return (
    <div className={styles.wrapper}>
      <CommentEntry />
      <Separator />
      <AllComments />
    </div>
  );
}
