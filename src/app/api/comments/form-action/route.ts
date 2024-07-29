import { NextRequest, NextResponse } from "next/server";

import { addComment } from "@/helpers/file-helpers";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const referer = request.headers.get("referer");

  const body = formData.get("body")?.toString() ?? "";
  const rawUserId = formData.get("userId")?.toString();
  if (!rawUserId) return NextResponse.error();
  const userId = parseInt(rawUserId);

  await addComment(body, userId);

  return NextResponse.redirect(referer ?? "/");
}
