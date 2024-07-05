import dayjs from "dayjs";
import React from "react";
import useSWR from "swr";

import AvatarWithPopover from "@/components/AvatarWithPopover";
import Card from "@/components/Card";
import styles from "@/styles/Comment.module.css";
import { User } from "@/types";
import { Comment as CommentType } from "@/types";

export interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const { body, createdAt, userId } = comment;

  const { data: user } = useSWR<User>(`/api/users/${userId}`, (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.user)
  );

  return (
    <Card backgroundColor="white" textColor="var(--color-gray-11)">
      <div className={styles.wrapper}>
        {user !== undefined && <AvatarWithPopover user={user} />}
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
