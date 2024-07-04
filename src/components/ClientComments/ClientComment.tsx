import dayjs from "dayjs";
import React from "react";
import useSWR from "swr";

import { User } from "@/types";
import { Comment as CommentType } from "@/types";

import Avatar from "../Avatar";
import Card from "../Card";
import styles from "./ClientComment.module.css";

export interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const { body, createdAt, userId } = comment;
  console.log("CREATED AT", createdAt);

  const { data: user } = useSWR<User>(`/api/users/${userId}`, (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.user)
  );

  return (
    <Card backgroundColor="white" textColor="var(--color-gray-11)">
      <div className={styles.wrapper}>
        {user !== undefined && <Avatar user={user} />}
        <div className={styles.content}>
          <p className={styles.date}>
            {dayjs(createdAt).format("MMM D, H:mm")}
          </p>
          <p className={styles.body}>{body}</p>
        </div>
      </div>
    </Card>
  );
}

export default Comment;
