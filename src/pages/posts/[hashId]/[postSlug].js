import React from "react";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolideBookmarkIcon } from "@heroicons/react/outline";

import axios from "axios";
import Link from "next/link";
const PostPage = ({ post }) => {
  return (
    <div className="bg-gray-100 ">
      <div className="md:max-w-screen-lg container mx-auto">
        <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 max-w-screen-md mx-auto">
          {/* author data*/}
          <div className="flex items-stretch">
            <img
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-blue object-scale-down bg-white"
              src={post.coverImage}
              alt=""
            />
            <div className="flex flex-col ml-4 justify-between">
              <div>
                <span className="font-bold text-base">Ashkan Valizadeh</span>

                <a className="bg-white border rounded-xl  ml-2 border-blue-500 text-xs font-semibold text-blue-500 px-3 py-1">
                  {post.category.englishTitle}
                </a>
              </div>
              <span className="font-normal text-xs hidden md:block ">
                front-end developer
              </span>
              <div className="font-normal text-gray-600">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                <span className="mx-1">&bull;</span>
                <span>
                  <span>reading : </span>
                  <span>{post.readingTime}</span>
                  <span>min</span>
                </span>
              </div>
            </div>
          </div>
          {/*interactios buttons*/}
          <div className="flex">
            <button>
              <LinkIcon className="w-6 h-6 hover:text-black text-gray-500 cursor-pointer" />
            </button>
            <button className="ml-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center cursor-pointer">
              <span className="mr-1 text-xs ">
                {post.isBookmarked ? "is saved" : "save"}
              </span>
              {post.isBookmarked ? (
                <SolideBookmarkIcon className="h-6 w-6 fill-current" />
              ) : (
                <BookmarkIcon className="h-6 w-6 stroke-current" />
              )}
            </button>
          </div>
        </header>
        <main className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl
        prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
        prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl">
          <h1>{post.title}</h1>
          <h2>Est dicta molestias et fugiat voluptatum ut dolores possimus. </h2>
          <p>
          Lorem ipsum dolor sit amet. Est internos fugiat et blanditiis nostrum id vitae dolor aut tempora molestiae aut nulla quia. Aut quas quia et labore libero rem doloribus iste et nihil consequatur. Et esse deleniti qui atque blanditiis quo nesciunt voluptate est voluptatem corrupti. Et repellat consequatur et facilis fuga aut obcaecati obcaecati aut accusantium voluptate est natus dolorem hic molestiae temporibus ut voluptate Quis! 
          </p>
          <h2>
          Ut odit sint aut odit quia. 
          </h2>
          <img src={post.coverImage} alt="" />
          <p>
          Sed neque incidunt ex consequatur optio eum officiis odio. Qui quibusdam voluptatem rem dolor odit eum illum temporibus qui dolore error ea magnam nobis eum suscipit rerum ad nihil libero. 
          </p>
          <h2>
          At dolore cumque sed galisum voluptate! 
          </h2>
          <p>
          Id dicta mollitia quo reprehenderit consequatur a perspiciatis alias rem nulla voluptas ut quasi ipsam. Sit ducimus natus id aliquam iure 33 neque totam aut corporis quam vel molestiae sunt ab autem blanditiis? Ex inventore autem sed possimus galisum 33 praesentium pariatur sed consequatur galisum aut atque corrupti iste dolores id inventore voluptatem! 
          </p>
          <h2>
          At dolore cumque sed galisum voluptate! 
          </h2>
          <pre dir="ltr">{`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</pre>
          <p>
          Id dicta mollitia quo reprehenderit consequatur a perspiciatis alias rem nulla voluptas ut quasi ipsam. Sit ducimus natus id aliquam iure 33 neque totam aut corporis quam vel molestiae sunt ab autem blanditiis? Ex inventore autem sed possimus galisum 33 praesentium pariatur sed consequatur galisum aut atque corrupti iste dolores id inventore voluptatem! 
          </p>
        </main>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
