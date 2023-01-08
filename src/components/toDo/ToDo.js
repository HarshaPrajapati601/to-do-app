import React from "react";
import {  ToDoListProvider } from "../../context";
import ToDoComponent from "./ToDoComponent";

const ToDo = () => {

  return (
    <ToDoListProvider>
     <ToDoComponent />
    </ToDoListProvider>
  );
};

export default ToDo;
