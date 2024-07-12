import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { addComment, getAllCommentsSlow } from "@/helpers/file-helpers";

export async function GET() {
  const comments = await getAllCommentsSlow();
  return NextResponse.json({ comments });
}

export async function POST(request: Request) {
  const { body, userId } = await request.json();
  const comment = await addComment(body, parseInt(userId));

  // revalidate, for server component cached data
  revalidatePath("/", "layout");

  return NextResponse.json({ comment }, { status: 201 });
}
