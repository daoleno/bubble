import ExplorePublications from "@/components/explore-publications";
import Feed from "@/components/feed";
import Layout from "@/components/layout";
import { useSession } from "@lens-protocol/react-web";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const { data } = useSession();
  const authenticated = data?.authenticated;
  const profileId = (data as any)?.profile?.id;

  return (
    <Layout>
      <div>
        {authenticated ? (
          <>
            <Feed profileId={profileId} />
            <Link
              className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-600 cursor-pointer"
              to={"/post"}
            >
              <PlusIcon>Post</PlusIcon>
            </Link>
          </>
        ) : (
          <ExplorePublications />
        )}
      </div>
    </Layout>
  );
}

export default Home;
