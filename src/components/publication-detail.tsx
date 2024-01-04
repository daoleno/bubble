import { Post, publicationId, usePublication } from "@lens-protocol/react-web";
import Comments from "./comments";
import PublicationCard from "./publication-card";

interface PublicationDetailProps {
  id: string;
}

export default function PublicationDetail({ id }: PublicationDetailProps) {
  const { data, error, loading } = usePublication({
    forId: publicationId(id as string),
  });

  console.log("data", data);

  // if (loading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="container mx-auto px-4">
      <PublicationCard publication={data as Post} />
      <Comments commentOn={id} />
    </div>
  );
}
