import supabase from "@/app/helpers/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    let { data: databases, error } = await supabase
      .from('databases')
      .select('*')

    return new Response(JSON.stringify(databases))
  } catch (error) {
    console.log("[DATABASE_TOOLS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}