import React from "react";

import Separator from "@/components/Separator";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";

export default function SuspensePage() {
  return (
    <>
      <CommentEntry />
      <Separator />
      <AllComments />
    </>
  );
}
