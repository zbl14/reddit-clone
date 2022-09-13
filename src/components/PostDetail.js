import React from "react";
import PropTypes from "prop-types";

const PostDetail = (props) => {
  const { post } = props;
  return(
      <React.Fragment>
      <h3>{post.subject}</h3>
      <h3>{post.name}</h3>
      <h3>{post.voteCount}</h3>
      <h3>{post.comment}</h3>
      <h3>{post.timestamp}</h3>
      </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
};

export default PostDetail;