import React from "react";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolideBookmarkIcon } from "@heroicons/react/outline";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import PostInteraction from "@/components/posts/PostInteraction";
import {MdContentCopy} from "react-icons/md";
import Postlist from "@/components/posts/PostList";
import PostComment from "@/components/posts/postComments";
import Layout from "@/containers/Layout";
import http from "src/services/httpServices";
import { useAuth } from "@/context/AuthContext";

const PostPage = ({ post }) => {
  const {user} = useAuth();
  console.log(post);
  return (
    <Layout>
    <div className="bg-gray-100 p-1 ">
      <div className="md:max-w-screen-lg container mx-auto">
        <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 max-w-screen-lg mx-auto">
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
        <main
          className="prose mb-4 prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl
        prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
        prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl max-w-screen-md mx-auto">
          <h1>{post.title}</h1>
          <h2>
            Est dicta molestias et fugiat voluptatum ut dolores possimus.{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet. Est internos fugiat et blanditiis
            nostrum id vitae dolor aut tempora molestiae aut nulla quia. Aut
            quas quia et labore libero rem doloribus iste et nihil consequatur.
            Et esse deleniti qui atque blanditiis quo nesciunt voluptate est
            voluptatem corrupti. Et repellat consequatur et facilis fuga aut
            obcaecati obcaecati aut accusantium voluptate est natus dolorem hic
            molestiae temporibus ut voluptate Quis!
          </p>
          <h2>Ut odit sint aut odit quia.</h2>
          <img src={post.coverImage} alt="" />
          <p>
            Sed neque incidunt ex consequatur optio eum officiis odio. Qui
            quibusdam voluptatem rem dolor odit eum illum temporibus qui dolore
            error ea magnam nobis eum suscipit rerum ad nihil libero.
          </p>
          <h2>At dolore cumque sed galisum voluptate!</h2>
          <p>
            Id dicta mollitia quo reprehenderit consequatur a perspiciatis alias
            rem nulla voluptas ut quasi ipsam. Sit ducimus natus id aliquam iure
            33 neque totam aut corporis quam vel molestiae sunt ab autem
            blanditiis? Ex inventore autem sed possimus galisum 33 praesentium
            pariatur sed consequatur galisum aut atque corrupti iste dolores id
            inventore voluptatem!
          </p>
          <h2>At dolore cumque sed galisum voluptate!</h2>
          <pre dir="ltr">{`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</pre>
          <p>
            Id dicta mollitia quo reprehenderit consequatur a perspiciatis alias
            rem nulla voluptas ut quasi ipsam. Sit ducimus natus id aliquam iure
            33 neque totam aut corporis quam vel molestiae sunt ab autem
            blanditiis? Ex inventore autem sed possimus galisum 33 praesentium
            pariatur sed consequatur galisum aut atque corrupti iste dolores id
            inventore voluptatem!
          </p>
        </main>

        {/*books like bookmark */}
        <section>
          <ul className="flex items-center flex-wrap gap-x-4 mb-4">
            {["front-end", "React", "Next", "Tailwind"].map((tag, index) => {
              return (
                <li
                  key={index}
                  className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all
                 cursor-pointer text-gray-600 text-sm mb-3 block">
                 {tag}
                </li>
              );
            })}
          </ul>
          {/*interaction */}
          <div className="flex items-center flex-col gap-y-6 md:flex-row md:justify-between">
            <PostInteraction post={post} className="justify-evenly w-full md:w-auto" />

            <div className="flex items-center gap-x-6 justify-between w-full md:w-auto ">
            <div className="flex items-center md:gap-x-4 gap-x-3 w-full justify-between md:w-auto">
              <a href="">
                <IoLogoLinkedin
                  size={30}
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a href="">
                <FaTelegram
                  size={24}
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a href="">
                <IoLogoTwitter
                  size={24}
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
            <div>
               <div className="bg-gray-200 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer ">
                 <span>copy&nbsp;link</span>
                 <MdContentCopy size={24}/>
               </div>
            </div>
            </div>
          </div>
        </section >
        <hr className="mb-6 mt-10 bg-gray-800 h-0.5"/>
        <section className="mb-16">
          <h2 className="font-extrabold text-2xl md:text-3xl mb-12">same posts</h2>
          
          <div className="overflow-x-scroll flex items-center gap-8 max-h-[380px]">
            
            <Postlist blogsData={post.related} />
            
            
            
          
          
          </div>
          
          
        </section>
        {/*post comments */}
        <PostComment post={post} postId={post._id} />
      </div>
    </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query , req } = ctx;
  const {
    data: { data },
  } = await http.get(`/posts/${query.postSlug}` , {withCredentials:true , 
  headers: {
    Cookie : req.headers.cookie || "" ,
  }});

  return {
    props: {
      post: data,
    },
  };
}
