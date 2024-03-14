import { NextResponse } from "next/server";

import supabase from "@/app/helpers/supabase";

// export async function POST(req: Request) {
//   try {
//     // const { data, error } = await supabase
//     //   .from('lowcode')
//     //   .insert(req.body)
//     //   .select()

//     const { handbook } = await req.json();

//     return NextResponse.json(handbook)
//   } catch (error) {
//     console.log("[LOWCODE]", error);
//     return new NextResponse("Internal Error", {
//       status: 500,
//     })
//   }
// }


export async function POST(req: Request) {
  try {
    const { handbook } = await req.json();

    return NextResponse.json(handbook)
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", {
      status: 500
    })
  }
}