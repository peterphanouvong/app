import { NextResponse } from "next/server";
import { db } from "@/db";
import { countries } from "@/db/schema";

export async function GET() {
  const data = db.select().from(countries).all();
  return NextResponse.json(data);
}
