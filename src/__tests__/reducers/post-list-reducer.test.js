import postListReducer from "../../reducers/post-list-reducer";
import {formatDistanceToNow} from "date-fns"; 
import * as c from "./../../actions/ActionTypes"

describe("postList", () => {
  let action;
  const postData = {
    name: "Ben",
    subject: "Food I like",
    comment: "I like ice-cream",
    voteCount: 5,
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    id: 1
  };

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

  test("should successfully add new post to mainPostList that includes data-fns-formatted wait times", () => {
    const { name, subject, comment, voteCount, timeOpen, formattedWaitTime, id } = postData;
    action = { 
      type: c.ADD_POST,
      name: name,
      subject: subject,
      comment: comment,
      voteCount: voteCount,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        subject: subject,
        comment: comment,
        voteCount: voteCount,
        timeOpen: timeOpen,
        formattedWaitTime: 'less than a minute ago',
        id: id
      }
    });
  });

  test("should successfully remove post from mainPostList", () => {
    action = {
      type: c.DELETE_POST,
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

  test('should add a formatted wait time to post entry', ()=> {
    const {name, subject, comment, voteCount, timeOpen, id} = postData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: "4 minutes ago",
      id: id,
    };
    expect(postListReducer({[id]:postData}, action)).toEqual({
      [id]: {
        name: name,
        subject: subject,
        comment: comment,
        voteCount: voteCount,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: "4 minutes ago"
      }
    })
  })
});