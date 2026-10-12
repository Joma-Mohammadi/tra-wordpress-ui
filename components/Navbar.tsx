import Image from "next/image";
import Link from "next/link";
import Logo from "../image/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image
          className="rounded-full"
          src={Logo}
          alt="JM Frotan Logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              className="h-auto rounded-full p-0 shadow-none hover:bg-transparent! focus-visible:bg-transparent! active:bg-transparent! cursor-pointer"
            >
              <Avatar>
                <AvatarImage src="http://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback className="text-black">JM</AvatarFallback>
              </Avatar>
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href="/profile" className="font-bold">Profile</Link>
              <DropdownMenuShortcut className="font-bold">⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
                <Link href="/auth" className="font-bold">Log out</Link>
              <DropdownMenuShortcut className="font-bold">⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
