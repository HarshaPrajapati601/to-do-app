import React, { useContext } from "react";
import { ToDoListContext } from "../../context";

const pageStyles = {
  subContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  buttonStyles: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 100,
    textAlign: "center",
  },
};
const ToDoDisplay = () => {
  const context = useContext(ToDoListContext)
  return context.list.map((list, i) => {
    return (
      <div className="todo" style={pageStyles.subContainer}>
        <li key={i}>{list}</li>
        <button
          onClick={() => context.onDelete(list)}
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  });
};

export default ToDoDisplay;
