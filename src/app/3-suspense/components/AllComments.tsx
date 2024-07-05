import React from "react";

import { getAllCommentsSlow } from "@/helpers/file-helpers";
import styles from "@/styles/AllComments.module.css";
import { Comment } from "@/types";

import ClientComment from "./Comment";

export interface ClientCommentsProps {}

async function ClientComments({}: ClientCommentsProps) {
  const comments = await getAllCommentsSlow();

  return (
    <div className={styles.wrapper}>
      {comments.map((comment: Comment) => (
        <ClientComment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default ClientComments;
