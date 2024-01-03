import PostCard from "@/components/postcard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function App() {
  const posts = [
    {
      id: 1,
      username: "John Doe",
      userhandle: "@johndoe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      postedAt: "2022-01-01 10:00:00",
    },
    {
      id: 2,
      username: "Jane Smith",
      userhandle: "@janesmith",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      postedAt: "2022-01-02 12:30:00",
    },
    {
      id: 2,
      username: "Jane Smith",
      userhandle: "@janesmith",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      postedAt: "2022-01-02 12:30:00",
    },
    // Add more mock posts here
  ];

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

      <h1 className="text-2xl font-bold mx-3">Trending</h1>
      <div className="overflow-y-scroll flex flex-col w-[400px] py-3">
        {posts.map((post) => (
          <div>
            <PostCard
              key={post.id}
              username={post.username}
              userhandle={post.userhandle}
              content={post.content}
              postedAt={post.postedAt}
            />
            <Separator />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
