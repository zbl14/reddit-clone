import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        formVisible: false,
        selectedPost: null,
        editPost: false,
      };
    }

    handleClick = () => {
      if(this.state.selectedPost !== null) {
        this.setState({
          formVisible: false,
          selectedPost: null,
          editPost: true,
        });
      } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
        }));
      }
    }
    
    handleAddingNewPostToList = (newPost) => {
      const { dispatch } = this.props;
      const { name, subject, comment, voteCount, timestamp, id } = newPost;
      const action = {
        type: 'ADD_POST',
        name: name,
        subject: subject,
        comment: comment,
        voteCount: voteCount,
        timestamp: timestamp,
        id: id
      }
      dispatch(action);
      this.setState({formVisible: false});
    }

    handleChangingSelectedPost = (id) => {
      const selectedPost = this.props.mainPostList[id];
      this.setState({ selectedPost: selectedPost });
    };

    handleDeletingPost = (id) => {
      const {dispatch} = this.props;
      const action = { 
        type: 'DELETE_POST',
        id: id,
      };
      dispatch(action);
      this.setState({ selectedPost: null });
    };

    handleEditClick = ()=> {
      this.setState({ editing: true });
    };

    handleEditingPostInList = (postToEdit)=>{
      const {dispatch} = this.props;
      const { id, name, subject, comment, voteCount, timestamp} = postToEdit;
      const action = {
        type:"ADD_POST",
        id: id,
        name: name,
        subject: subject,
        comment: comment,
        voteCount: voteCount,
        timestamp: timestamp,
      };
      dispatch(action);
      this.setState({ editing: false, selectedPost: null });
    }

    render(){
      let curVisibleState = null;
      let buttonText = null;
      if(this.state.editing){
        curVisibleState = (
          <EditPostForm 
            post={this.state.selectedPost}
            onEditPost={this.handleEditingPostInList}
          />
        );
        buttonText = "Edit Post";
      } else if (this.state.selectedPost != null){
        curVisibleState = 
          <PostDetail 
            post={this.state.selectedPost}
            onClickingEdit={this.handleEditClick}
            onClickingDelete={this.handleDeletingPost}  
          />
        buttonText = "Return to Post List";
      } else if(this.state.formVisible){
        curVisibleState=<NewPostForm onNewPostCreation = {this.handleAddingNewPostToList}/>;
        buttonText = "Return to Post List";
      } else {
        curVisibleState=(
          <PostList 
            postList={this.props.mainPostList}
            onPostSelection = {this.handleChangingSelectedPost}
          />)
        buttonText = "New Post";
      }
      return(
        <React.Fragment>
          {curVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    };
}

const mapStateToProps = (state) => {
  return {
    mainPostList: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);

PostControl.propTypes = {
  mainPostList: PropTypes.object
};

export default PostControl;