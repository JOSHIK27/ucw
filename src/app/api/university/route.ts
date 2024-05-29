import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { university, country } = await req.json();
  try {
    const { error } = await supabase
      .from("university")
      .insert({ name: university, country: country });

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json({ message: "Sucess" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
