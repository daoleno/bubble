import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="absolute left-0 px-3">
          <img src="/icons/icon.png" className="w-5 h-5" alt="bubble" />
        </div>
        <Link className="text-2xl font-bold" to="/">
          Bubble
        </Link>
        <div className="absolute right-0">
          <Button variant="link">Login</Button>
        </div>
      </div>
      {children}
    </main>
  );
}
