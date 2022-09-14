import * as a from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("Reddit Clone actions", () => {
  it("addPost should create ADD_POST action", ()=>{
    expect(
      a.addPost({
        name: "Ben",
        subject: "Food I like",
        comment: "I like ice-cream",
        voteCount: 0,
        timestamp: "09/13/2022",
        id: 1,
      })
    ).toEqual({
      type: c.ADD_POST,
      name: "Ben",
      subject: "Food I like",
      comment: "I like ice-cream",
      voteCount: 0,
      timestamp: "09/13/2022",
      id: 1,
    });
  });

  it("deletePost should create DELETE_POST action", ()=>{
    expect(a.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it("updateTime should create UPDATE_TIME action", () => {
    expect(a.updateTime(1, "less than a minute ago")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "less than a minute ago",
    });
  });
});