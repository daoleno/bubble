import { Post, publicationId, usePublication } from "@lens-protocol/react-web";
import { useParams } from "react-router-dom";
import PublicationCard from "./publication-card";

interface CommentProps {
  postId: string;
}

interface CommentData {
  id: string;
  createdAt: string;
  content: string;
  by: {
    handle: {
      localName: string;
      fullHandle: string;
    };
    metadata: {
      picture: {
        optimized: {
          uri: string;
        };
      };
    };
  };
}

export function Comment() {
  let { postId } = useParams();

  const { data, error, loading } = usePublication({
    forId: publicationId(postId as string),
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
      {/* <div className="mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex border-t border-gray-200 py-4">
            <img
              className="rounded-full w-12 h-12 mx-4"
              src={comment.by.metadata.picture.optimized.uri}
              alt={comment.by.handle.localName}
            />
            <div>
              <div className="text-lg font-semibold">
                {comment.by.handle.localName}
              </div>
              <div className="text-sm text-gray-600">
                @{comment.by.handle.fullHandle}
              </div>
              <div className="mt-2 text-gray-800">{comment.content}</div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
