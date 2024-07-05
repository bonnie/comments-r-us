import { NextRequest, NextResponse } from "next/server";

import { addComment } from "@/helpers/file-helpers";

// get a string from the body stream
// reference: https://github.com/vercel/next.js/discussions/46483#discussioncomment-7197436
async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const body = formData.get("body")?.toString() ?? "";
  const rawUserId = formData.get("userId")?.toString();
  if (!rawUserId) return NextResponse.error();

  const userId = parseInt(rawUserId);
  await addComment(body, userId);

  return NextResponse.redirect("http://localhost:3000/2-server-only");
}
