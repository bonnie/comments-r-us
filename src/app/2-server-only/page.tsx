import React from "react";

import Separator from "@/components/Separator";

import AllComments from "./components/AllComments";
import CommentEntry from "./components/CommentEntry";

export default function ServerOnly() {
  // uncomment to see error
  //   const [state, setState] = React.useState();

  return (
    <>
      <CommentEntry />
      <Separator />
      <AllComments />
    </>
  );
}
