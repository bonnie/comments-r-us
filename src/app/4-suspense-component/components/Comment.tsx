import dayjs from "dayjs";
import React from "react";

import AvatarImage from "@/components/AvatarImage";
import Card from "@/components/Card";
import { getUserById } from "@/helpers/file-helpers";
import styles from "@/styles/Comment.module.css";
import { Comment as CommentType } from "@/types";

export interface CommentProps {
  comment: CommentType;
}

async function Comment({ comment }: CommentProps) {
  const { body, createdAt, userId } = comment;
  const user = await getUserById(userId);

  return (
    <Card backgroundColor="white" textColor="var(--color-gray-11)">
      <div className={styles.wrapper}>
        {/* can't use AvatarWithPopover; that's a client component */}
        {user !== undefined && <AvatarImage user={user} />}
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
