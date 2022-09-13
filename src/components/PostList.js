import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    name: "Ben",
    subject: "Food I like",
    comment: "I like ice-cream",
    voteCount: 5,
    timestamp: "09/13/2022",
  }, 
  {
    name: "Ryan",
    subject: "Game I like",
    comment: "I like warzone",
    voteCount: 6,
    timestamp: "09/13/2022",
  }, 
  {
    name: "Tom",
    subject: "Game I like",
    comment: "I like topwar",
    voteCount: 6,
    timestamp: "09/13/2022",
  }
];

const PostList = () => {
  return (
    <React.Fragment>    
      <hr/>
      {mainPostList.map((post, index) => 
        <Post 
          name = {post.name}
          subject = {post.subject}
          comment = {post.comment}
          voteCount = {post.voteCount}
          timestamp = {post.timestamp}
          />
      )}
    </React.Fragment>
  );
};

export default PostList;