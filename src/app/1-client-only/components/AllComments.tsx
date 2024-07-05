import React from "react";
import useSWR from "swr";

import ErrorCard from "@/components/ErrorCard";
import Spinner from "@/components/Spinner";
import styles from "@/styles/AllComments.module.css";
import { Comment } from "@/types";

import ClientComment from "./Comment";

export interface ClientCommentsProps {}

function ClientComments({}: ClientCommentsProps) {
  const {
    data: comments,
    isLoading,
    isValidating,
    error,
  } = useSWR<Comment[]>("/api/comments", (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.comments)
  );

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

  if (comments) {
    return (
      <div className={styles.wrapper}>
        {isValidating && (
          <div style={{ width: "fit-content", margin: "1rem auto" }}>
            <Spinner />
          </div>
        )}
        {comments.map((comment: Comment) => (
          <ClientComment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return null;
}

export default ClientComments;
