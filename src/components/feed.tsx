import { Separator } from "@/components/ui/separator";
import { FeedEventItemType, Post, useFeed } from "@lens-protocol/react-web";
import { useEffect, useRef, useState } from "react";
import Loader from "./loader";
import PublicationCard from "./publication-card";

export default function Feed({ profileId }: { profileId: string }) {
  const { data, hasMore, next, error, loading } = useFeed({
    where: {
      for: profileId as any,
      feedEventItemTypes: [FeedEventItemType.Post],
    },
  });

  console.log("####", data);

  const [fetchingMore, setFetchingMore] = useState(false);
  const scrollContainerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current.scrollTop +
          scrollContainerRef.current.clientHeight >=
        scrollContainerRef.current.scrollHeight
      ) {
        if (hasMore && !loading) {
          setFetchingMore(true);
          next().then(() => setFetchingMore(false));
        }
      }
    };

    let element = scrollContainerRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [loading, hasMore]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div ref={scrollContainerRef}>
      <h1 className="text-xl font-bold mx-3">Feed</h1>
      <ul>
        {data?.map((item, index) => (
          <li key={item.id} className="w-[400px]">
            <PublicationCard publication={item.root as Post} />
            <Separator />
          </li>
        ))}
      </ul>
      {(fetchingMore || loading) && <Loader />}
    </div>
  );
}
