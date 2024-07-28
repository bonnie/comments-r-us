import React from "react";

import Spinner from "@/components/Spinner";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";

export default function ServerAndClient() {
  return (
    <>
      <CommentEntry />
      <React.Suspense fallback={<Spinner />}>
        <AllComments />
      </React.Suspense>
    </>
  );
}
