import React from "react";
import useSWR from "swr";

import ErrorCard from "@/components/ErrorCard";
import Spinner from "@/components/Spinner";
import { Comment } from "@/types";

import ClientComment from "./ClientComment";
import styles from "./ClientComments.module.css";

export interface ClientCommentsProps {}

function ClientComments({}: ClientCommentsProps) {
  const {
    data: comments,
    isLoading,
    error,
  } = useSWR("/api/comments", () =>
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => data.comments)
  );

  console.log(comments, isLoading, error);

  if (isLoading) {
    return (
      <div style={{ width: "fit-content", margin: "1rem auto" }}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  return (
    <ol className={styles.wrapper}>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>
          <ClientComment comment={comment} />
        </li>
      ))}
    </ol>
  );
}

export default ClientComments;
