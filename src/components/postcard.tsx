import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as timeago from "timeago.js";

interface PostCardProps {
  username: string;
  userhandle: string;
  content: string;
  mediaSrc?: string;
  postedAt: string;
}

export default function PostCard(props: PostCardProps) {
  const { username, userhandle, content, mediaSrc, postedAt } = props;

  // Format the postedAt date here
  const formattedDate = timeago.format(postedAt);

  return (
    <div className="p-4 w-full">
      <div className="flex space-x-4 mb-2">
        <div>
          <Avatar>
            <AvatarImage
              alt="User's avatar"
              src="/placeholder.svg?height=50&width=50"
            />
            <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium leading-none inline-block">
                {username}
              </h4>
              <p className="text-sm text-gray-500 inline-block ml-2">
                @{userhandle}
              </p>
            </div>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
          <p className="text-sm text-gray-700">{content}</p>
          {mediaSrc && (
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
          )}
          <div className="flex space-x-4">
            <Button variant="link" size={"icon"}>
              <ReplyIcon className="w-4 h-4" />
            </Button>
            <Button variant="link" size={"icon"}>
              <TwitterIcon className="w-4 h-4" />
            </Button>
            <Button variant="link" size={"icon"}>
              <HeartIcon className="w-4 h-4" />
            </Button>
            <Button variant="link" size={"icon"}>
              <ShareIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
