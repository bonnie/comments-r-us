import { NextResponse } from "next/server";

import { getAllCommentsSlow } from "@/helpers/file-helpers";

export async function GET() {
  const comments = await getAllCommentsSlow();
  return NextResponse.json({ comments });
}
