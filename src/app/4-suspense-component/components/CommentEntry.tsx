import React from "react";

import Button from "@/components/Button";
import { getAllUsers } from "@/helpers/file-helpers";
import { getRandomUserId } from "@/helpers/user-helpers";
import styles from "@/styles/CommentEntry.module.css";

async function CommentEntry() {
  const users = await getAllUsers();
  const randomUserId = getRandomUserId(users);

  // party like it's 1999
  return (
    <form
      method="POST"
      action="/api/comments/form-action"
      className={styles.wrapper}
    >
      <textarea placeholder="Enter a comment..." name="body" />
      <input type="hidden" name="userId" value={randomUserId} />
      <div className={styles.buttons}>
        <Button type="reset" variant="outline">
          reset
        </Button>
        <Button type="submit">post</Button>
      </div>
    </form>
  );
}

export default CommentEntry;
