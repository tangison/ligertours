import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

/* Serverless filesystems start empty, so the SQLite file may not exist yet.
   Make sure the Leads table exists before the first write of an instance. */
let schemaReady: Promise<unknown> | null = null;
function ensureSchema() {
  if (!schemaReady) {
    schemaReady = db.$executeRawUnsafe(
      `CREATE TABLE IF NOT EXISTS "Lead" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "phone" TEXT,
        "travelFrom" TEXT,
        "groupSize" TEXT,
        "message" TEXT NOT NULL,
        "source" TEXT NOT NULL DEFAULT 'contact',
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`
    );
  }
  return schemaReady;
}

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  travelFrom: z.string().trim().max(200).optional().default(""),
  groupSize: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(10).max(4000),
  source: z.string().trim().max(60).optional().default("contact"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid enquiry data." }, { status: 400 });
    }
    const d = parsed.data;
    await ensureSchema();
    await db.lead.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone || null,
        travelFrom: d.travelFrom || null,
        groupSize: d.groupSize || null,
        message: d.message,
        source: d.source,
      },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not save the enquiry." }, { status: 500 });
  }
}
