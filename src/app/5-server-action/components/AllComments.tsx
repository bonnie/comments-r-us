import React from "react";

import { getAllCommentsSlow } from "@/helpers/file-helpers";
import styles from "@/styles/AllComments.module.css";
import { Comment as CommentType } from "@/types";

import Comment from "./Comment";

export interface AllCommentsProps {}

async function AllComments({}: AllCommentsProps) {
  const comments = await getAllCommentsSlow();

  return (
    <div className={styles.wrapper}>
      {comments.map((comment: CommentType) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default AllComments;
