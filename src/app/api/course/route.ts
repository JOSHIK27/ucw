import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { course, university, prof_id } = await req.json();
  try {
    const { error } = await supabase
      .from("course")
      .insert({ name: course, prof_id, university });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
