import React, { useContext } from "react";
import ToDoDisplay from "./ToDoDisplay";
import ToDoInput from "./ToDoInput";
import { ToDoListContext } from "../../context";

const pageStyles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  subContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  noList: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    paddingBottom: 30,
  },
  buttonStyles: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 100,
    textAlign: "center",
  },
};
const ToDoComponent = () => {
  const context = useContext(ToDoListContext);
  console.log("context value is ", context)

  return (
    <>
      <ToDoInput />
      {context.list.length > 0 ? (
        <div style={pageStyles.Container}>
          <ToDoDisplay />
        </div>
      ) : (
        <div style={pageStyles.noList}>
          <p>No task list found</p>
        </div>
      )}
    </>
  );
};

export default ToDoComponent;
