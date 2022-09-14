import * as c from "./../actions/ActionTypes";

const reducer = (state={}, action) => {
  const {name, subject, comment, voteCount, formattedWaitTime, timeOpen, id} = action;
  switch (action.type) {
    case c.ADD_POST:
      return {
        ...state,
        ...{
          [id]: {
            name: name,
            subject: subject,
            comment: comment,
            voteCount: voteCount,
            id: id,
            timeOpen: timeOpen,
            formattedWaitTime: formattedWaitTime,
          },
        },
      };
    case c.DELETE_POST:
      let newState = {...state};
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const newPost = {...state[id],...{formattedWaitTime}};
      const updatedState = {...state, ...{[id]:newPost}};
      return updatedState;
    default:
      return state;
  }
};

export default reducer;