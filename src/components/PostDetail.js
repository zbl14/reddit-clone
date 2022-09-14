import React from "react";
import PropTypes from "prop-types";

const PostDetail = (props) => {
  const { post, onClickingDelete, onClickingUpvote } = props;
  return (
    <React.Fragment>
      <h1>Details of {post.subject}</h1>
      <p>Posted: {post.formattedWaitTime}</p>
      <h3>Name: {post.name}</h3>
      <h3>Comment: {post.comment}</h3>
      <h3>Vote Count: {post.voteCount}</h3>
      <button onClick={() => onClickingUpvote(post.id, post.voteCount)}>
        Upvote
      </button>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
    </React.Fragment>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingUpvote: PropTypes.func,
};

export default PostDetail;
