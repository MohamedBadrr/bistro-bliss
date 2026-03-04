import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/keep-alive
 *
 * A lightweight endpoint that pings the Supabase database to prevent it
 * from going into sleep/pause mode on the free tier.
 *
 * Protected by a secret token passed as a query parameter:
 *   /api/keep-alive?secret=YOUR_CRON_SECRET
 *
 * Schedule this endpoint to be called every 5 days using a free cron
 * service such as https://cron-job.org
 */
export async function GET(request: NextRequest) {
    // ── Auth guard ────────────────────────────────────────────────────────────
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── Ping the database ─────────────────────────────────────────────────────
    // A minimal query — just fetches a single row to wake the connection.
    const { error } = await supabase
        .from("products")
        .select("id")
        .limit(1)
        .single();

    // "PGRST116" = no rows found — that's fine, the DB is still awake.
    if (error && error.code !== "PGRST116") {
        console.error("[keep-alive] Supabase ping failed:", error.message);
        return NextResponse.json(
            { error: "Database ping failed", details: error.message },
            { status: 500 }
        );
    }

    console.log("[keep-alive] Supabase pinged successfully at", new Date().toISOString());

    return NextResponse.json({
        status: "ok",
        pingedAt: new Date().toISOString(),
    });
}
