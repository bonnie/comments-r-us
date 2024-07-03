import dayjs from "dayjs";
import { sleep } from "@/utils";
const COMMENTS_FILE = process.cwd() + "/data/comments.json";
import fs from "fs/promises";

export async function addComment(comment: string) {
  const date = dayjs();
  const comments = await getComments();
  comments.push({ comment, date });
  await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments), "utf-8");
}

export async function getComments() {
  const rawComments = await fs.readFile(COMMENTS_FILE, "utf-8");
  return JSON.parse(rawComments);
}

export async function getCommentsSlow() {
  await sleep(1000);
  return getComments();
}
