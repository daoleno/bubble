import Layout from "@/components/layout";
import PublicationDetail from "@/components/publication-detail";
import { useParams } from "react-router-dom";

export default function Publication() {
  let { id } = useParams();

  return (
    <Layout>
      <PublicationDetail id={id as string} />
    </Layout>
  );
}
