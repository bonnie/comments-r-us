import React from "react";

import Avatar from "@/components/AvatarWithPopover";
import Card from "@/components/Card";
import styles from "@/styles/Comment.module.css";

import styles from "./CommentCard.module.css";

export interface CommentCardProps {}

function CommentCard({}: CommentCardProps) {
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

export default CommentCard;
