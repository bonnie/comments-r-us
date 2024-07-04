"use client";
import React from "react";

import ClientCommentForm from "@/components/ClientCommentForm";
import ClientComments from "@/components/ClientComments";
import Separator from "@/components/Separator";

import styles from "./page.module.css";

export default function ClientOnly() {
  return (
    <div className={styles.wrapper}>
      <ClientCommentForm />
      <Separator />
      <ClientComments />
    </div>
  );
}
