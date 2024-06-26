import CourseAdminForm from "@/components/courseAdminForm";
import { supabase } from "@/lib/supabase";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  try {
    const resp1 = await supabase.from("university").select();
    if (resp1.error) throw new Error(resp1.error.message);
    const resp2 = await supabase.from("professor").select();
    if (resp2.error) throw new Error(resp2.error.message);
    return <CourseAdminForm university={resp1.data} prof={resp2.data} />;
  } catch (error) {}
  return <></>;
}
