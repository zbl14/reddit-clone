import * as c from "./ActionTypes"

export const addPost = (post) => {
  const {name, subject, comment, voteCount, timestamp, id} = post;
  return {
    type: c.ADD_POST,
    name: name,
    subject: subject,
    comment: comment,
    voteCount: voteCount,
    timestamp: timestamp,
    id: id,
  }
}

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id,
})

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});