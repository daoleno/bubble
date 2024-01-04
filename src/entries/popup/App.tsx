import ExplorePublications from "@/components/explore-publications";
import Feed from "@/components/feed";
import Layout from "@/components/layout";
import { useSession } from "@lens-protocol/react-web";

function App() {
  const { data } = useSession();
  const authenticated = data?.authenticated;
  const profileId = (data as any)?.profile?.id;

  return (
    <Layout>
      <div className="w-[400px]">
        {authenticated ? (
          <Feed profileId={profileId} />
        ) : (
          <ExplorePublications />
        )}
      </div>
    </Layout>
  );
}

export default App;
