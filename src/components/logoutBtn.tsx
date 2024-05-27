"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
export default function Logout() {
  return (
    <Button
      onClick={() => signOut()}
      className="mr-40 bg-[#315196] hover:bg-[#2d4069]"
    >
      Logout
    </Button>
  );
}
