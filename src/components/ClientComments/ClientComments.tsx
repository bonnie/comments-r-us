import React from "react";

import ErrorCard from "@/components/ErrorCard";
import Spinner from "@/components/Spinner";
import { Comment } from "@/types";

import ClientComment from "./ClientComment";
import styles from "./ClientComments.module.css";
type Status = "idle" | "loading" | "error";

export interface ClientCommentsProps {}

function ClientComments({}: ClientCommentsProps) {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [status, setStatus] = React.useState<Status>("idle");

  React.useEffect(() => {
    setStatus("loading");
    fetch("/api/comments")
      .then((response) => response.json())
      .then((data: { comments: Comment[] }) => {
        setComments(data.comments);
        setStatus("idle");
      })
      .catch((e) => setStatus("error"));
  }, []);

  if (status === "loading") {
    return (
      <div style={{ width: "fit-content", margin: "1rem auto" }}>
        <Spinner />
      </div>
    );
  }

  if (status === "error") {
    return <ErrorCard error="an error occurred" />;
  }

  return (
    <ol className={styles.wrapper}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <ClientComment comment={comment} />
        </li>
      ))}
    </ol>
  );
}

export default ClientComments;
