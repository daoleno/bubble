import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Loader() {
  return (
    <div
      className={cn(
        "bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center space-x-2 bg-opacity-50 my-7"
      )}
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
}
