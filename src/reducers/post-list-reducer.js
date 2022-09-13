const reducer = (state={}, action) => {
  const {name, subject, comment, voteCount, timestamp, id} = action;
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        ...{
          [id]: {
            name: name,
            subject: subject,
            comment: comment,
            voteCount: voteCount,
            timestamp: timestamp,
            id: id,
          },
        },
      };
    case "DELETE_POST":
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;