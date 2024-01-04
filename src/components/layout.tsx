import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout, useSession } from "@lens-protocol/react-web";
import { Link } from "react-router-dom";
import { Avatar } from "./ui/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  console.log("data", data);
  const authenticated = data?.authenticated;
  const { execute: logout } = useLogout();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="w-[400px] min-h-screen mx-auto">
      <div className="flex items-center justify-center">
        <div className="absolute left-0 px-3">
          <img src="/icons/icon.png" className="w-5 h-5" alt="bubble" />
        </div>
        <Link className="text-2xl font-bold" to="/">
          Bubble
        </Link>
        {authenticated ? (
          <div className="absolute right-0 p-3">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    alt="User's avatar"
                    src={
                      ((data as any)?.profile.metadata?.picture as any)
                        ?.optimized?.uri
                    }
                  />
                  <AvatarFallback>
                    {(data as any)?.profile.handle?.localName
                      .charAt(0)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link className="absolute right-0" to={"/login"}>
            <Button variant="link">Login</Button>
          </Link>
        )}
      </div>
      {children}
    </main>
  );
}
