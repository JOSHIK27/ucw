import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "../auth";
import { Card } from "./ui/card";

export default function LoginCard() {
  return (
    <section className="w-full">
      <div className="absolute h-[250px] w-full bg-[#4f6fb9]">
        <Card className="relative mx-auto mt-40 rounded-lg px-8 py-8 text-center shadow-xl md:w-[500px]">
          <div className="mb-4 flex items-center justify-center">
            <div className="text-[28px] font-[600] text-[#315196]">Login</div>
          </div>
          <form
            action={async (formData) => {
              "use server";
              await signIn("resend", formData, { redirectTo: "/" });
            }}
            className="space-y-[8px] "
          >
            <Input type="text" name="email" placeholder="Email" />
            <Button
              className="w-full bg-[#315196] hover:bg-[#2d4069]"
              type="submit"
            >
              Sign In With Email
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
