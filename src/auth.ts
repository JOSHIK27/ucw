import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
  }),
});
