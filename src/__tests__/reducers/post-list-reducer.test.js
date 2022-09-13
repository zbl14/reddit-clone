import postListReducer from "../../reducers/post-list-reducer"; 

describe("postList", () => {
  let action;
  const postData = {
    name: "Ben",
    subject: "Food I like",
    comment: "I like ice-cream",
    voteCount: 5,
    timestamp: "09/13/2022",
  }
  const curState = {
   1: {
      name: "Ben",
      subject: "Food I like",
      comment: "I like ice-cream",
      voteCount: 5,
      timestamp: "09/13/2022",
    }, 
  2: {
      name: "Ryan",
      subject: "Game I like",
      comment: "I like warzone",
      voteCount: 6,
      timestamp: "09/13/2022",
    }, 
  3: {
      name: "Tom",
      subject: "Game I like",
      comment: "I like topwar",
      voteCount: 6,
      timestamp: "09/13/2022",
    }
  };

  test("should return default state if there is no action type passed into the reducer", () => {
    expect(postListReducer({},{type:null})).toEqual({});
  });

  test("should successfully add new post to mainPostList", () => {
    const { name, subject, comment, voteCount, timestamp, id } = postData;
    action = { 
      type: "ADD_POST",
      name: name,
      subject: subject,
      comment: comment,
      voteCount: voteCount,
      timestamp: timestamp,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        subject: subject,
        comment: comment,
        voteCount: voteCount,
        timestamp: timestamp,
        id: id
      }
    });
  });

  test("should successfully remove post from mainPostList", () => {
    action = {
      type: "DELETE_POST",
      id: 1,
    };
    expect(postListReducer(curState, action)).toEqual({
      2: {
        name: "Ryan",
        subject: "Game I like",
        comment: "I like warzone",
        voteCount: 6,
        timestamp: "09/13/2022",
      }, 
      3: {
        name: "Tom",
        subject: "Game I like",
        comment: "I like topwar",
        voteCount: 6,
        timestamp: "09/13/2022",
      },
    });
  });
});