import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const request = await req.json();
  try {
    const {
      course,
      year,
      experience,
      overallStars,
      courseDepthStars,
      recommendStars,
    } = request;

    const { data, error } = await supabase
      .from("course")
      .select()
      .eq("name", course);

    if (error) {
      throw new Error(error?.details);
    } else {
      const { error } = await supabase.from("review").insert({
        course_id: data[0].id,
        experience,
        overallStars,
        courseDepthStars,
        recommendStars,
        year,
      });
      if (error) throw new Error(error?.details);
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
