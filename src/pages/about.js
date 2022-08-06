import Layout from "@/containers/Layout";
import React from "react";

const about = () => {
  return (
    <div>
      <Layout>
        <div className="mt-6 mb-16">
          <main
            className="prose mb-4 prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl
        prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
        prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl max-w-screen-md mx-auto">
            <h1 className="text-violet-600">About the project</h1>
            <p>
            This project is a blog project The user must be able to like
                and bookmark the posts The user must be able to post comments
                and reply to other peoples comments The user can be
                authenticated with  httpOnly cookies This project is made by Next.js and is SSR project. In this project Tailwind was used for styling and it was worked with my post and MongoDB
            </p>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default about;
