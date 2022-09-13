import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form>
        <input 
          type="text"
          name="subject"
          placeholder="Subject Title" />
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="number"
          name="voteCount"
          value= "0"
          hidden />
        <input 
          type="datetime"
          name="timestamp"
          />
        <textarea
          name="comment"
          placeholder="Type your comment here" />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {

}

export default ReusableForm;