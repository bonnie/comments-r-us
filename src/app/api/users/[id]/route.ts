import { NextResponse } from "next/server";

import { getUserById } from "@/helpers/file-helpers";

// reference: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUserById(parseInt(params.id));
  return NextResponse.json({ user });
}
