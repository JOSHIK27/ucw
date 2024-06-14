import ProfAdminForm from "@/components/ProfAdminForm";
import { supabase } from "@/lib/supabase";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  try {
    const { data, error } = await supabase.from("university").select();
    if (error) throw new Error(error.message);
    return <ProfAdminForm data={data} />;
  } catch (error) {}
  return <></>;
}
