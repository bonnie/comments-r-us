import React from "react";

import Separator from "@/components/Separator";
import Spinner from "@/components/Spinner";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";

export default function SuspenseComponent() {
  return (
    <>
      <CommentEntry />
      <Separator />
      <React.Suspense fallback={<Spinner />}>
        <AllComments />
      </React.Suspense>
    </>
  );
}
