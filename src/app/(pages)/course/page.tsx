import CourseAdminForm from "@/components/courseAdminForm";
import { supabase } from "@/lib/supabase";
export default async function Page() {
  try {
    const resp1 = await supabase.from("university").select();
    if (resp1.error) throw new Error(resp1.error.message);
    const resp2 = await supabase.from("professor").select();
    if (resp2.error) throw new Error(resp2.error.message);
    console.log(resp1.data, resp2.data);
    return <CourseAdminForm university={resp1.data} prof={resp2.data} />;
  } catch (error) {}
  return <></>;
}
