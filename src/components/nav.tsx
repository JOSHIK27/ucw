import { auth } from "../auth";
import { Button } from "./ui/button";
import { HomeIcon, ChatBubbleIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Logout from "./logoutBtn";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default async function Nav() {
  const session = await auth();

  return (
    <div className="fixed top-0 z-50 flex h-12 w-full items-center bg-white shadow-md lg:justify-evenly">
      <SheetSide />
      <div className="hidden lg:flex">
        <Link href={"../"}>
          <Button className={`mr-40`} variant={"outline"}>
            Home
          </Button>
        </Link>
        <Link href={"../review"}>
          <Button className="mr-40" variant={"outline"}>
            Review
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="mr-40 cursor-pointer rounded-md border-[1px] px-4 py-2 text-[14px] font-[500]">
            Admin
          </DropdownMenuTrigger>

          <DropdownMenuContent className="cursor-pointer">
            <DropdownMenuLabel>Forms</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"../university"}>
              <DropdownMenuItem className="cursor-pointer">
                University
              </DropdownMenuItem>
            </Link>
            <Link href={"../course"}>
              <DropdownMenuItem className="cursor-pointer">
                Course
              </DropdownMenuItem>
            </Link>
            <Link href={"../prof"}>
              <DropdownMenuItem className="cursor-pointer">
                Professor
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        {session?.user ? (
          <Logout />
        ) : (
          <Link href={"../login"}>
            <Button className="mr-40 bg-[#315196] hover:bg-[#2d4069]">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <div className="flex flex-col">
            <Link href={"../"}>
              <Button className="my-4 w-full">
                Home
                <HomeIcon className="ml-4" />
              </Button>
            </Link>
            <Link href={"../feed"}>
              <Button className="my-4 w-full">
                Feed
                <Pencil1Icon className="ml-4" />
              </Button>
            </Link>
            <Link href={"../chats"}>
              <Button className="my-4 w-full">
                Chat <ChatBubbleIcon className="ml-4" />
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
