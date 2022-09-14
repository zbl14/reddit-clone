import React from "react";
import PropTypes from "prop-types";

const PostDetail = (props) => {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Details of {post.subject}</h1>
      <p>Posted: {post.formattedWaitTime}</p>
      <h3>{post.name}</h3>
      <h3>{post.comment}</h3>
      <h3>{post.voteCount}</h3>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
    </React.Fragment>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default PostDetail;
