import dayjs from "dayjs";
import React from "react";

import { Comment as CommentType } from "@/types";

import Avatar from "../Avatar";
import Card from "../Card";
import styles from "./ClientComment.module.css";

export interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [user, setUser] = React.useState();
  const { body, createdAt, userId } = comment;

  React.useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data.user));
  }, [userId]);

  return (
    <Card backgroundColor="white" textColor="var(--color-gray-11)">
      <div className={styles.wrapper}>
        {user && <Avatar user={user} />}
        <div className={styles.content}>
          <p className={styles.date}>{dayjs(createdAt).format("DD MMM")}</p>
          <p className={styles.body}>{body}</p>
        </div>
      </div>
    </Card>
  );
}

export default Comment;
