import React from "react";
import useSWR from "swr";

import ErrorCard from "@/components/ErrorCard";
import Spinner from "@/components/Spinner";
import styles from "@/styles/AllComments.module.css";
import { Comment as CommentType } from "@/types";

import Comment from "./Comment";
const USE_SWR_OPTIONS = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export interface AllCommentsProps {}

function AllComments({}: AllCommentsProps) {
  const {
    data: comments,
    isLoading,
    isValidating,
    error,
  } = useSWR<CommentType[]>(
    "/api/comments",
    (url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => data.comments),
    USE_SWR_OPTIONS
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (comments) {
    return (
      <div className={styles.wrapper}>
        {isValidating && <Spinner />}
        {comments.map((comment: CommentType) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }

  return null;
}

export default AllComments;
