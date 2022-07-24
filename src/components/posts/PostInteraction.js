import React from "react";
import { AnnotationIcon, HeartIcon, BookmarkIcon} from "@heroicons/react/outline"
import { HeartIcon as Solidhearticon, BookmarkIcon as SolidBookmarkicon} from "@heroicons/react/solid"


const PostInteraction = ({ post , isSmall , className }) => {
    const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`
  return (
    <div className={`flex items-center justify-center ${isSmall ? "gap-x-2" : "gap-x-4"} ${className}`}>
      <button className="flex items-center  p-0.5 bg-gray-300 rounded gap-x-1">
        <AnnotationIcon className={`${iconSize} mr-1 stroke-2 stroke-gray-500 `}  />
        <span className="text-gray-500  font-medium leading-3  ">
          {post.commentsCount}
        </span>
      </button>

      <button className="flex items-center  p-0.5 bg-red-200 rounded gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all">
        {post.isLiked ?  <Solidhearticon className={`${iconSize} fill-current`}/>  : <HeartIcon className={`${iconSize} stroke-2 stroke-current `} />}
        <span className="  font-medium leading-3   ">
          {post.likesCount}
        </span>
      </button>

      <button className="flex items-end p-0.5  bg-blue-200  text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded">
        {post.isBookmarked ? <SolidBookmarkicon className={`${iconSize} fill-current`}/> : <BookmarkIcon className={`${iconSize} stroke-2 stroke-current `}  />}
      </button>
    </div>
  );
};

export default PostInteraction;
