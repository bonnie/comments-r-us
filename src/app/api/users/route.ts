import { NextResponse } from "next/server";

import { getAllUsers } from "@/helpers/file-helpers";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json({ users });
}
