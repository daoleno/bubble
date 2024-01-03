import ExplorePublications from "@/components/explore-publications";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="absolute left-0 px-3">
          <img src="/icons/icon.png" className="w-5 h-5" alt="bubble" />
        </div>
        <h1 className="text-2xl font-bold">Bubble</h1>
        <div className="absolute right-0">
          <Button variant="link">Login</Button>
        </div>
      </div>

      <h1 className="text-xl font-bold mx-3">Trending</h1>
      <div className="w-[400px]">
        <ExplorePublications />
      </div>
    </main>
  );
}

export default App;
