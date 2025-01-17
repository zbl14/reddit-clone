import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { formatDistanceToNow } from "date-fns";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      editing: false,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updatePostElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.mainPostList).forEach((post) => {
      const newFormattedWaitTime = formatDistanceToNow(post.timeOpen, {
        addSuffix: true,
      });
      const action = a.updateTime(post.id, newFormattedWaitTime);
      dispatch(action);
    });
  };

  handleClick = () => {
    if (this.state.selectedPost !== null) {
      this.setState({
        formVisible: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    this.setState({ formVisible: false });
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({ selectedPost: selectedPost });
  };

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    this.setState({ editing: false, selectedPost: null });
  };

  handleClickUpvote = (id, voteCount) => {
    const { dispatch } = this.props;
    const upvoted = voteCount + 1;
    const action = a.upvote(id, upvoted);
    dispatch(action);
    const newSelectedPost = {
      ...this.props.mainPostList[id],
      ...{ voteCount: voteCount + 1 },
    };
    this.setState({ selectedPost: newSelectedPost });
  };

  handleClickDownvote = (id, voteCount) => {
    const { dispatch } = this.props;
    const downvoted = voteCount - 1;
    const action = a.downvote(id, downvoted);
    dispatch(action);
    const newSelectedPost = {
      ...this.props.mainPostList[id],
      ...{ voteCount: voteCount - 1 },
    };
    this.setState({ selectedPost: newSelectedPost });
  };

  render() {
    let curVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      curVisibleState = (
        <EditPostForm
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      curVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingPost}
          onClickingUpvote={this.handleClickUpvote}
          onClickingDownvote={this.handleClickDownvote}
        />
      );
      buttonText = "Return to Post List";
    } else if (this.state.formVisible) {
      curVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Post List";
    } else {
      curVisibleState = (
        <PostList
          postList={this.props.mainPostList}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "New Post";
    }
    return (
      <React.Fragment>
        {curVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  let sortedstate = {};
  Object.keys(state)
    .sort((a, b) => state[b].voteCount - state[a].voteCount)
    .forEach((key) => {
      sortedstate[key] = state[key];
    });
  return {
    mainPostList: sortedstate,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

PostControl.propTypes = {
  mainPostList: PropTypes.object,
};

export default PostControl;
