import MultiForm from "@/components/multiForm";
import { supabase } from "@/lib/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const resp = await supabase.from("university").select();
  const universityList = resp?.data?.map((item) => item.name);

  type coursePropItem = {
    id: Number;
    name: string;
    prof_id: Number;
    university: string;
  };
  const { data }: PostgrestSingleResponse<coursePropItem[]> = await supabase
    .from("course")
    .select();

  return (
    <MultiForm
      universityList={universityList ? universityList : []}
      courseList={data ? data : []}
    />
  );
}
