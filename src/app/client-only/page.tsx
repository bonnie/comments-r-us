"use client";
import React from "react";

import ClientComment from "@/components/ClientComment";
import ErrorCard from "@/components/ErrorCard";
import Spinner from "@/components/Spinner";
import { Comment } from "@/types";

type State = "idle" | "loading" | "error";

export default function ClientOnly() {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [state, setState] = React.useState<State>("idle");

  React.useEffect(() => {
    fetch("/api/comments")
      .then((response) => response.json())
      .then((data: { comments: Comment[] }) => setComments(data.comments));
  }, []);

  if (state === "loading") {
    return <Spinner />;
  }

  if (state === "error") {
    return <ErrorCard error="an error occurred" />;
  }

  return (
    <ol>
      {comments.map((comment) => (
        <li key={comment.id}>
          <ClientComment comment={comment} />
        </li>
      ))}
    </ol>
  );
}
