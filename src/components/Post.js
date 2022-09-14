import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={() => {
          props.whenPostClicked(props.id);
        }}
      >
        <h3>Subject: {props.subject}</h3>
        <p>
          <em>Posted:{props.formattedWaitTime}</em>
        </p>
        <h3>Name: {props.name}</h3>
        <h3>Comment: {props.comment}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
};

Post.prototype = {
  name: PropTypes.string,
  subject: PropTypes.string,
  voteCount: PropTypes.number,
  comment: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenPostClicked: PropTypes.func,
};

export default Post;
