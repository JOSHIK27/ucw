import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "../auth";

export default function LoginCard() {
  return (
    <div className="mx-auto mt-12 w-[500px] rounded-lg p-12 text-center shadow-xl">
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
    </div>
  );
}
