import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  return(
    <React.Fragment>
      <div onClick={() => {
        props.whenPostClicked(props.id);
      }}>
        <h3>Subject: {props.subject}</h3>
        <h3>Name: {props.name}</h3>
        <h3>Vote Count: {props.voteCount}</h3>
        <h3>Comment: {props.comment}</h3>
        <h3>When: {props.timestamp}</h3>
      </div>
    </React.Fragment>
  );
}

Post.prototype={
  name: PropTypes.string,
  subject: PropTypes.string,
  voteCount: PropTypes.number,
  comment: PropTypes.string,
  timestamp: PropTypes.timestamp,
  whenPostClicked: PropTypes.func
}

export default Post;