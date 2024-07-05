import React from "react";

import Separator from "@/components/Separator";
import Spinner from "@/components/Spinner";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";

export default function ServerOnly() {
  // uncomment to see error
  //   const [state, setState] = React.useState();

  return (
    <>
      <CommentEntry />
      <Separator />
      {/* uncomment Suspense to stream AllComments when ready */}
      {/* <React.Suspense fallback={<Spinner />}> */}
      <AllComments />
      {/* </React.Suspense> */}
    </>
  );
}
