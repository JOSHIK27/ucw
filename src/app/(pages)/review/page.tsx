import ReviewsUI from "@/components/reviews";
import { supabase } from "@/lib/supabase";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  try {
    const { data, error } = await supabase.from("course").select();
    if (error) throw new Error(error.message);
    const universities = Array.from(
      new Set(data.map((course) => course.university)),
    );

    return <ReviewsUI universities={universities} courses={data} />;
  } catch (error) {
    return <>{error}</>;
  }
}
