import dayjs from "dayjs";
import fs from "fs/promises";

import { User } from "@/types";
import { Comment } from "@/types";
import { sleep } from "@/utils";

const COMMENTS_FILE = process.cwd() + "/data/comments.json";
const USERS_FILE = process.cwd() + "/data/users.json";

export async function getAllComments(): Promise<Comment[]> {
  const rawComments = await fs.readFile(COMMENTS_FILE, "utf-8");
  return JSON.parse(rawComments).sort((a: Comment, b: Comment) =>
    a.createdAt > b.createdAt ? -1 : 1
  );
}

export async function getAllCommentsSlow() {
  await sleep(2000);
  return getAllComments();
}

export async function addComment(body: string, userId: number) {
  const createdAt = dayjs();
  const comments = await getAllComments();

  const id = Math.max(...comments.map((comment: Comment) => comment.id)) + 1;
  const comment = { body, createdAt: createdAt.toISOString(), userId, id };
  comments.push(comment);
  await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments), "utf-8");

  return comment;
}

export async function getAllUsers(): Promise<User[]> {
  const rawUsers = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(rawUsers);
}

export async function getUserById(id: number): Promise<User | undefined> {
  const users = await getAllUsers();
  return users.find((user: User) => user.id === id);
}
