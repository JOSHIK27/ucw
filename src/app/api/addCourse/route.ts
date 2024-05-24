import { supabase } from "@/lib/supabase";
export async function POST(req: Request, res: Response) {
  const { University, Course } = await req.json();

  let { data, error } = await supabase
    .from("course")
    .insert({ name: University, country: Course });

  return Response.json(["Sucess"]);
}
