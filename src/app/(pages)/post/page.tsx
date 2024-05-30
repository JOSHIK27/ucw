import MultiForm from "@/components/multiForm";
import { supabase } from "@/lib/supabase";
export default async function Page() {
  const resp1 = await supabase.from("university").select();
  const universityList = resp1?.data?.map((item) => item.name);

  const { data } = await supabase.from("course").select();

  return (
    <MultiForm
      universityList={universityList ? universityList : []}
      courseList={data}
    />
  );
}
