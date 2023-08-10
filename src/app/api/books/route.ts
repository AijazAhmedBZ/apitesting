import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";

export async function GET(request: NextRequest) {
  return NextResponse.json({ books });
}
