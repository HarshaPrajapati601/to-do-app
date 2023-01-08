import React, { useState } from "react";
import {
    ADD_TODO_ITEM,
  ADD_TODO_LIST,
  DELETE_TODO_ITEM,
  INITIALIZE_LIST,
} from "../helpers/toDoHelper";

const getInitialState = () => {
  // getting todo list
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", []);
  return [];
};
const initialState = {
  todoList: getInitialState(),
  currentToDo: {}
};

const getInitialTodo = () => {
    return initialState
}


const ToDoReducer = (state = initialState, action) => {
    const type = action.type;
  switch (type) {
    case ADD_TODO_ITEM: {
        return { ...state, currentToDo: action.payload };
    }
    case ADD_TODO_LIST:
      return { ...state, todoList: {...state.todoList, ...state.currentToDo }};
    case DELETE_TODO_ITEM: {
      const item = action.payload;
      const newList = state.todoList.filter((list) => list !== item);
      return { ...state, todoList: newList };
    }
    case INITIALIZE_LIST:
      return state;
    default:
      return state;
  }
};

export { ToDoReducer, initialState, getInitialTodo };
