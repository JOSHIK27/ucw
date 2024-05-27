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
    <div className="bg-white fixed z-50 top-0 w-full shadow-md h-12 flex lg:justify-evenly items-center">
      <SheetSide />
      <div className="hidden lg:flex">
        <Link href={"../"}>
          <Button className="mr-40" variant={"outline"}>
            Home
          </Button>
        </Link>
        <Button className="mr-40" variant={"outline"}>
          Post
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="mr-40 cursor-pointer border-[1px] rounded-md px-4 py-2 text-[14px] font-[500]">
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
            <DropdownMenuItem className="cursor-pointer">
              Course
            </DropdownMenuItem>
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
    <div className="lg:hidden grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <div className="flex flex-col">
            <Link href={"../"}>
              <Button className="w-full my-4">
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
