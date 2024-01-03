import { Separator } from "@/components/ui/separator";
import {
  ExplorePublicationType,
  ExplorePublicationsOrderByType,
  LimitType,
  useExplorePublications,
} from "@lens-protocol/react";
import { Post } from "@lens-protocol/react-web";
import { useEffect, useRef, useState } from "react";
import Loader from "./loader";
import PublicationCard from "./publication-card";

export default function ExplorePublications() {
  const { data, hasMore, next, error, loading } = useExplorePublications({
    where: {
      publicationTypes: [ExplorePublicationType.Post],
      since: Math.floor(Date.now() / 1000) - 86400,
    },
    orderBy: ExplorePublicationsOrderByType.TopReacted,
    limit: LimitType.Ten,
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
          <li key={publication.id} className="w-[400px]">
            <PublicationCard publication={publication as Post} />
            <Separator />
          </li>
        ))}
      </ul>
      {(fetchingMore || loading) && <Loader />}
    </div>
  );
}
