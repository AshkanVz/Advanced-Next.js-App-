import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({ comments, parentCommentId , postId}) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="ml-5">
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} postId={postId} responseTo={comment._id} />
            <ReplyComment comments={comments} parentCommentId={comment._id} postId={postId} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
