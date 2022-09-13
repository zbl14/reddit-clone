import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { formatDistanceToNow } from "date-fns";

const NewPostForm = (props) => {
  const handleNewPostFormSubmission = (event) => {
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      subject: event.target.subject.value,
      comment: event.target.comment.value,
      voteCount: parseInt(event.target.voteCount.value),
      timestamp: formatDistanceToNow(new Date(), {addSuffix: true}),
      id: v4()
    })
  }

  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewPostFormSubmission}
      buttonText= "Post" />
    </React.Fragment>
  );
};

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;