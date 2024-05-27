import ProfAdminForm from "@/components/ProfAdminForm";
import { supabase } from "@/lib/supabase";
export default async function Page() {
  try {
    const { data, error } = await supabase.from("university").select();
    if (error) throw new Error(error.message);
    return <ProfAdminForm data={data} />;
  } catch (error) {}
  return <></>;
}
