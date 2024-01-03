import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@lens-protocol/react-web";
import {
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
  SquircleIcon,
} from "lucide-react";
import { useState } from "react";
import * as timeago from "timeago.js";

export default function PublicationCard({
  publication,
}: {
  publication: Post;
}) {
  const [showMore, setShowMore] = useState(false);
  const contentLengthThreshold = 100;
  const content = (publication?.metadata as any).content;
  const shortContent = `${content.substring(0, contentLengthThreshold)}...`;
  const formattedDate = timeago.format(publication.createdAt);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // const navigate = useNavigate();

  // const handleCommentClick = (postId: string) => {
  //   console.log("postId", postId);
  //   navigate(`/comments/${postId}`);
  // };

  return (
    <div className="p-4 w-full">
      <div className="flex space-x-4 mb-2">
        <div>
          <Avatar>
            <AvatarImage
              alt="User's avatar"
              src={(publication.by.metadata?.picture as any)?.optimized?.uri}
            />
            <AvatarFallback>
              {publication.by.handle?.localName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium leading-none inline-block">
                {publication.by.handle?.localName}
              </h4>
              <p className="text-sm text-gray-500 inline-block ml-2">
                @{publication.by.handle?.fullHandle}
              </p>
            </div>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
          <p className="text-sm text-gray-700">
            {showMore
              ? content
              : content.length > contentLengthThreshold
              ? shortContent
              : content}
          </p>
          {content.length > contentLengthThreshold && (
            <button className="text-blue-500" onClick={toggleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </button>
          )}
          {/* {mediaSrc && (
            <img
              className="rounded-lg w-full mb-2"
              height="200"
              src={mediaSrc}
              style={{
                aspectRatio: "400/200",
                objectFit: "cover",
              }}
              width="400"
            />
          )} */}
          <div className="flex gap-7 mt-3">
            <div
              className="flex items-center gap-1"
              // onClick={handleCommentClick}
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span className="ml-1">{publication.stats.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <RepeatIcon className="w-4 h-4" />
              <span className="ml-1">{publication.stats.mirrors}</span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon className="w-4 h-4" />
              <span className="ml-1">{publication.stats.upvotes}</span>
            </div>
            <div className="flex items-center gap-1">
              <SquircleIcon className="w-4 h-4" />
              <span className="ml-1">{publication.stats.collects}</span>
            </div>
            {/* <ShareIcon className="w-4 h-4" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
