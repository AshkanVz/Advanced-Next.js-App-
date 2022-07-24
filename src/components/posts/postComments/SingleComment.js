import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

const SingleComment = ({ comment }) => {
  const [onReply, setOnreply] = useState(false);
  const [commentvalue , setCommentvalue] = useState("");
  return (
    <div className="border mt-6 bg-slate-50 border-gray-200 rounded-2xl p-2 md:p-4">
      <div className="flex gap-x-4">
        <UserCircleIcon className="h-10 w-10 fill-gray-300" />
        <div className="flex flex-col justify-between ">
          <span>{comment.writer?.name}</span>
          <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div>{comment.content}</div>
      <button
        onClick={() => {
          setOnreply(!onReply);
        }}>
        {!onReply ? 
         <button className="text-blue-500 ">answer to</button> :
         <button className="text-red-500 ">cancel</button>}
       </button>
    {onReply && 
    <div className="mt-6 transition-all duration-300">
    <form >
        <span className="font-bold md:text-lg">Reply to {comment.writer?.name}</span>
        <textarea
          className="focus:ring-slate-300 p-4 rounded-xl my-4 w-full border-none ring-1 ring-slate-200
               shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
          value={commentvalue}
          onChange={(e) => setCommentvaluw(e.target.value)}
          placeholder="write your reply here . . ."
        />
        <button className="mt-4 mx-auto py-3 w-full sm:w-56 bg-gradient-to-r from-violet-700 to-violet-900 rounded-xl text-white px-3 md:text-lg">
            Reply
        </button>
      </form>
    </div> }
    
     
    </div>
  );
};

export default SingleComment;
