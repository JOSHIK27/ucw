import { supabase } from "@/lib/supabase";

export async function POST(req: Request, res: Response) {
  const { University, Country } = await req.json();

  let { data, error } = await supabase
    .from("university")
    .insert({ name: University, country: Country });

  return Response.json(["Sucess"]);
}
