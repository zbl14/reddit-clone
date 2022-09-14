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
      voteCount: 0,
      id: v4(),
      timeOpen: new Date(),
      formattedWaitTime: formatDistanceToNow(new Date(), {
        addSuffix: true,
      }),
    });
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post"
      />
    </React.Fragment>
  );
};

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPostForm;
