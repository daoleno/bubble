import { Separator } from "@/components/ui/separator";
import { LimitType } from "@lens-protocol/react";
import {
  Comment,
  publicationId,
  usePublications,
} from "@lens-protocol/react-web";
import { useEffect, useRef, useState } from "react";
import Loader from "./loader";
import PublicationCard from "./publication-card";

export default function Comments({ commentOn }: { commentOn: string }) {
  const { data, hasMore, next, error, loading } = usePublications({
    where: {
      commentOn: {
        id: publicationId(commentOn),
      },
    },
    limit: LimitType.TwentyFive,
  });

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
    <div ref={scrollContainerRef} style={{ height: "100vh", overflow: "auto" }}>
      <ul>
        {data?.map((publication, index) => (
          <li key={publication.id}>
            <PublicationCard publication={publication as Comment} />
            <Separator />
          </li>
        ))}
      </ul>
      {(fetchingMore || loading) && <Loader />}
    </div>
  );
}
