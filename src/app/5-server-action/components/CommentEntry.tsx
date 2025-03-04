import { revalidatePath } from "next/cache";
import React from "react";

import Button from "@/components/Button";
import { getAllUsers } from "@/helpers/file-helpers";
import { addComment } from "@/helpers/file-helpers";
import { getRandomUserId } from "@/helpers/user-helpers";
import styles from "@/styles/CommentEntry.module.css";

async function submitComment(formData: FormData) {
  "use server";

  const body = formData.get("body")?.toString();
  const userId = formData.get("userId")?.toString();

  if (body && userId) {
    await addComment(body, parseInt(userId));

    // "layout" revalidates any paths that use the layout at the level of the path
    //    i.e. descendants
    // https://nextjs.org/docs/app/api-reference/functions/revalidatePath#revalidating-a-layout-path
    revalidatePath("/", "layout");
  }
}

async function CommentEntry() {
  const users = await getAllUsers();
  const randomUserId = getRandomUserId(users);
  return (
    <form action={submitComment} className={styles.wrapper}>
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
