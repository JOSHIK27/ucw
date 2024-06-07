import { auth } from "../auth";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
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
import type { Session } from "next-auth";

export default async function Nav() {
  const session = await auth();

  return (
    <nav className="fixed top-0 z-50 flex h-12 w-full items-center bg-white shadow-md lg:justify-evenly">
      <SheetSide session={session} />
      <div className="hidden lg:flex">
        <Link href={"../"}>
          <Button className={`mr-40`} variant={"outline"}>
            Home
          </Button>
        </Link>
        <Link href={"../review"}>
          <Button className="mr-40" variant={"outline"}>
            Reviews
          </Button>
        </Link>
        <Link href={"../post"}>
          <Button className="mr-40" variant={"outline"}>
            Post
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
    </nav>
  );
}

export function SheetSide({ session }: { session: Session | null }) {
  return (
    <nav className="grid grid-cols-2 gap-2 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className="ml-2 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <div className="flex flex-col">
            <Link href={"../"}>
              <Button className={`mb-2 mr-40 mt-4 w-full`} variant={"outline"}>
                Home
              </Button>
            </Link>
            <Link href={"../review"}>
              <Button className="mb-2 mr-40 w-full" variant={"outline"}>
                Reviews
              </Button>
            </Link>
            <Link href={"../post"}>
              <Button className="mb-2 mr-40 w-full" variant={"outline"}>
                Post
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="mb-2 mr-40 w-full cursor-pointer rounded-md border-[1px] px-4 py-2 text-[14px] font-[500]">
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
              <Button className="mr-40 w-full bg-[#315196] hover:bg-[#2d4069]">
                Logout
              </Button>
            ) : (
              <Link href={"../login"}>
                <Button className="mb-2 mr-40 w-full bg-[#315196] hover:bg-[#2d4069]">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
