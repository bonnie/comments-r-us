import dayjs from "dayjs";
import fs from "fs/promises";

import { User } from "@/types";
import { sleep } from "@/utils";

const COMMENTS_FILE = process.cwd() + "/data/comments.json";
const USERS_FILE = process.cwd() + "/data/users.json";

export async function getAllComments() {
  const rawComments = await fs.readFile(COMMENTS_FILE, "utf-8");
  return JSON.parse(rawComments);
}

export async function getAllCommentsSlow() {
  await sleep(1000);
  return getAllComments();
}

export async function addComment(body: string, userId: number) {
  const date = dayjs();
  const comments = await getAllComments();
  const id = comments.length + 1;
  comments.push({ body, date, userId, id });
  await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments), "utf-8");
}

export async function getAllUsers() {
  const rawUsers = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(rawUsers);
}

export async function getUserById(id: number) {
  const users = await getAllUsers();
  return users.find((user: User) => user.id === id);
}
