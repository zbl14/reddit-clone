import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        formVisible: false,
      };
    }

  render(){
    let curVisibleState = null;
    if(this.state.formVisible){
      curVisibleState=<NewPostForm/>
    } else {
      curVisibleState=<PostList/>
    }
    return(
      <React.Fragment>
        {curVisibleState}
      </React.Fragment>
    );
  };
}

export default PostControl;