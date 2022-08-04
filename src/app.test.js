import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/index";
import AppFilter from "./components/app-filter/app-filter";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import TodoAddForm from "./components/todo-add-form/todo-add-form";
import TodoList from "./components/todo-list/todo-list";
import TodoListItem from "./components/todo-list-item/todo-list-item";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("render with redux", () => {
  afterEach(() => {
    cleanup();
  });
  it("AppFilter", () => {
    expect(renderWithRedux(<AppFilter />));
  });
  it("AppInfo", () => {
    expect(renderWithRedux(<AppInfo />));
  });
  it("SearchPanel", () => {
    expect(renderWithRedux(<SearchPanel />));
  });
  it("TodoAddForm", () => {
    expect(renderWithRedux(<TodoAddForm />));
  });
  it("TodoList", () => {
    expect(renderWithRedux(<TodoList />));
  });
  it("TodoListItem", () => {
    expect(renderWithRedux(<TodoListItem />));
  });
});
