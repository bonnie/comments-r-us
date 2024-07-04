import { NextResponse } from "next/server";

import { getAllComments } from "@/helpers/file-helpers";

export async function GET() {
  const comments = await getAllComments();
  return NextResponse.json({ comments });
}
