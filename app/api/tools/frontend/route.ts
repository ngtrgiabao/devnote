import supabase from "@/app/helpers/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    let { data: frontend, error } = await supabase
      .from('frontend')
      .select('*')

    return new Response(JSON.stringify(frontend))
  } catch (error) {
    console.log("[FRONTEND_TOOLS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}