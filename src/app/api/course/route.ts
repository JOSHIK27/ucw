import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, prof_id } = await req.json();

  try {
    const { error } = await supabase.from("course").insert({ name, prof_id });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "sucess" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
