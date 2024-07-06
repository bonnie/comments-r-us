import dayjs from "dayjs";
import React from "react";

import AvatarWithPopover from "@/components/AvatarWithPopover";
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
        {/* add AvatarWithPopover child comopnent back in */}
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
