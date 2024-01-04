import ExplorePublications from "@/components/explore-publications";
import Layout from "@/components/layout";

function App() {
  return (
    <Layout>
      <h1 className="text-xl font-bold mx-3">Trending</h1>
      <div className="w-[400px]">
        <ExplorePublications />
      </div>
    </Layout>
  );
}

export default App;
