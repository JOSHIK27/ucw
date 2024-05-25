import { Button } from "./ui/button";
import { HomeIcon, ChatBubbleIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default async function Nav() {
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
        <Button className="mr-40" variant={"outline"}>
          Admin
        </Button>
        <Link href={"../login"}>
          <Button className="mr-40 bg-[#315196] hover:bg-[#2d4069]">
            Login
          </Button>
        </Link>
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
