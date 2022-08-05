import React from "react";
import {
  AnnotationIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as Solidhearticon,
  BookmarkIcon as SolidBookmarkicon,
} from "@heroicons/react/solid";
import axios from "axios";
import http from "src/services/httpServices";
import { useRouter } from "next/router";

const PostInteraction = ({ post, isSmall, className }) => {
  const router = useRouter();
  const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`;
  // like send
  const likeHandler = (postt) => {
    http
      .put(`/posts/like/${postt}`)
      .then((res) => {
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          { scroll: false }
        );
      })
      .catch();
  };
  //bookmark send
  const bookHandler = (postt) => {
    http
      .put(`/posts/bookmark/${postt}`)
      .then((res) => {
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          { scroll: false }
        );
      })
      .catch();
  };

  return (
    <div
      className={`flex items-center justify-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className}`}>
      <button className="flex items-center  p-0.5 bg-gray-300 rounded gap-x-1">
        <AnnotationIcon
          className={`${iconSize} mr-1 stroke-2 stroke-gray-500 `}
        />
        <span className="text-gray-500  font-medium leading-3  ">
          {post.commentsCount}
        </span>
      </button>

      <button
        className="flex items-center  p-0.5 bg-red-200 rounded gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all"
        onClick={() => {
          likeHandler(post._id);
        }}>
        {post.isLiked ? (
          <Solidhearticon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-2 stroke-current `} />
        )}
        <span className="  font-medium leading-3   ">{post.likesCount}</span>
      </button>

      <button
        className="flex items-end p-0.5  bg-blue-200  text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded"
        onClick={() => {
          bookHandler(post._id);
        }}>
        {post.isBookmarked ? (
          <SolidBookmarkicon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-2 stroke-current `} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
