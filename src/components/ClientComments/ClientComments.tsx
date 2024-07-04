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
        {comments.map((comment: Comment) => (
          <ClientComment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return null;
}

export default ClientComments;
