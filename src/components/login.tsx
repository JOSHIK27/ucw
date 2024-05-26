import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "../auth";

export default function LoginCard() {
  return (
    <div className="mt-12 w-[500px] mx-auto p-12 rounded-lg shadow-xl text-center">
      <div className="flex justify-center items-center mb-4">
        <div className="font-[600] text-[28px] text-[#315196]">Login</div>
      </div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
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
