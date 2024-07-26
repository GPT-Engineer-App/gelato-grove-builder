import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

export const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full bg-green-100 hover:bg-green-200">
        <CircleUser className="h-5 w-5 text-green-800" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="bg-green-50">
      <DropdownMenuLabel className="text-green-800">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator className="bg-green-200" />
      <DropdownMenuItem className="text-green-700 hover:bg-green-100">Settings</DropdownMenuItem>
      <DropdownMenuItem className="text-green-700 hover:bg-green-100">Support</DropdownMenuItem>
      <DropdownMenuSeparator className="bg-green-200" />
      <DropdownMenuItem className="text-green-700 hover:bg-green-100">Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
