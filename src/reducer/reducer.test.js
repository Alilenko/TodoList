import { screen } from "@testing-library/react";
import reducer from "./index";
import {
  addToForm,
  deletePost,
  addImportantPost,
  addUrgentPost,
  toComplete,
  filtered,
} from "../action/index";

let state = [
  {
    body: "First post",
    id: 1,
    important: false,
    urgent: false,
    completed: false,
  },
  {
    body: "it is a greeting",
    id: 2,
    important: true,
    urgent: false,
    completed: false,
  },
];

describe("Redux testing", () => {
  it("add new post", async () => {
    let action = addToForm({
      body: "testing",
      important: false,
      urgent: false,
      id: 5,
    });
    let newState = reducer(state.data, action);
    expect(newState.data).toHaveLength(3);
    expect(newState.data[2].body).toBe("testing");
  });
  it("delete post", () => {
    let deleteItem = reducer(state.data, deletePost(2));
    expect(deleteItem.data).toHaveLength(1);
    expect(screen.queryByText(/it is a greeting/i)).toBeNull();
  });
  it("add to important", () => {
    let importantItem = reducer(state.data, addImportantPost(1));
    expect(importantItem.data).toHaveLength(2);
    expect(importantItem.data[0].important).toBeTruthy();
  });
  it("add urgent post", () => {
    let addUrgent = reducer(state.data, addUrgentPost(1));
    expect(addUrgent.data[0].urgent).toBeTruthy;
  });
  it("add to complete", () => {
    let complete = reducer(state.data, toComplete(1));
    expect(complete.data[0].completed).toBeTruthy();
  });
  it("filter post", () => {
    let all = reducer(state.data, filtered("all"));
    let imp = reducer(state.data, filtered("important"));
    let urg = reducer(state.data, filtered("urgent"));
    expect(all.filter).toBe("all");
    expect(imp.filter).toBe("important");
    expect(urg.filter).toBe("urgent");
  });
});
