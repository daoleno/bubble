import Layout from "@/components/layout";
import { Plate, PlateContent } from "@udecode/plate-common";

import React from "react";

const Post: React.FC = () => {
  return (
    <Layout>
      <Plate>
        <PlateContent placeholder="Bubble bubble..." />
      </Plate>
    </Layout>
  );
};

export default Post;
