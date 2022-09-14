import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

const EditPostForm = (props) => {
  const {post} = props;
  const handleEditPostFormSubmission = (event) =>{
    event.preventDefault();
    props.onEditPost({
      name:event.target.name.value,
      subject:event.target.subject.value,
      comment:event.target.comment.value,
      voteCount: post.voteCount,
      timestamp: formatDistanceToNow(new Date(), {addSuffix: true}),
      id: post.id
    })
  };
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update"
      />
    </React.Fragment>
  );
};

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;