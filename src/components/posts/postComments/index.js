import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const PostComment = ({ post }) => {
  const [comment, setComment] = useState("");
  return (
    <div className=" mb-10">
      <h2 className=" font-extrabold text-2xl md:text-3xl">Comments</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
              <ReplyComment comments={post.comments} parentCommentId={comment._id} />
            </React.Fragment>
          )
        );
      })}

      {/*base comment form */}
      <form className="mt-8 ">
        <span className="font-bold md:text-lg">Submit a new comment</span>
        <textarea
          className="focus:ring-primary p-4 rounded-xl my-4 w-full border-none  ring-1  ring-slate-200
               shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="write me your comment here . . ."
        />
        <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-gradient-to-r from-violet-700 to-violet-900 rounded-xl text-white px-3 md:text-lg">
          submit comment
        </button>
      </form>
    </div>
  );
};

export default PostComment;
