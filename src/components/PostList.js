import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => (
        <Post
          whenPostClicked={props.onPostSelection}
          name={post.name}
          subject={post.subject}
          comment={post.comment}
          voteCount={post.voteCount}
          timeOpen={post.timeOpen}
          formattedWaitTime={post.formattedWaitTime}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  );
};

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
};

export default PostList;
