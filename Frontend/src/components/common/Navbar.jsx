import { Search, Bell, Moon, Lightbulb, Sun } from "lucide-react";
import { Button } from "../ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";


export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="h-16  bg-background px-6 flex items-center justify-between w-full">

      {/* Left */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
       
          placeholder="Search anything ..."
          className="pl-9 roun-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Dark Mode & Light Mode */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        {/* Notification */}
        <button className="relative h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-accent">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>GD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="rounded-sm">
            <DropdownMenuItem className="rounded-sm">Profile</DropdownMenuItem>
            <DropdownMenuItem className="rounded-sm">Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-sm">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}