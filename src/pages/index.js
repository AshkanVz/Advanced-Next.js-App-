import Layout from "@/containers/Layout";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <div>
        <h2>Home Page</h2>
        <Link href={`/blogs`}>
          <a>Blogs</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
