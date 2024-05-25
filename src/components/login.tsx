import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { signIn } from "../auth";

export default function LoginCard() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
      className="space-y-[8px] mt-12 w-[500px] mx-auto  p-12 rounded-lg shadow-xl"
    >
      <Input type="text" name="email" placeholder="Email" />
      <Button className="w-full bg-[#315196] hover:bg-[#2d4069]" type="submit">
        Sign In
      </Button>
    </form>
  );
}
