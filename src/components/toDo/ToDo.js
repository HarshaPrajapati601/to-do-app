import React, { useContext } from "react";
import { ToDoListContext, ToDoListProvider } from "../../context";
import ToDoComponent from "./ToDoComponent";

const ToDo = () => {
  const context = useContext(ToDoListContext);
  console.log("context value is ", context)

  return (
    <ToDoListProvider>
     <ToDoComponent />
    </ToDoListProvider>
  );
};

export default ToDo;
