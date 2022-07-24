import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="ml-5">
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} />
            <ReplyComment comments={comments} parentCommentId={comment._id} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
