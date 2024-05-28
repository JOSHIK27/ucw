import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const request = await req.json();
  try {
    const { prof, university } = request;
    console.log(prof, university);

    const { data, error } = await supabase
      .from("university")
      .select()
      .eq("name", university);

    if (!error) {
      const { error } = await supabase.from("professor").insert({
        name: prof,
        university_id: data[0].id,
      });

      if (error) {
        throw new Error(error?.details);
      }

      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    throw new Error(error?.details);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
