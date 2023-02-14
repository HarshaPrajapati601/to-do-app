import React, { useContext } from "react";
import { ToDoListContext } from "../../context";

const pageStyles = {

  subContainer: {
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingBottom: 30
  },
  buttonStyles: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 100,
    textAlign: "center",
  },
};
const ToDoInput = () => {
  const context = useContext(ToDoListContext);
  return (
      <div style={pageStyles.subContainer}>
        <input
          value={context.currentTodo}
          onChange={(e) => {
            context.onChangeInput(e);
          }}
          placeholder="Create a new ToDo"
        />
        <button style={pageStyles.buttonStyles}  type="button" class="btn btn-success" onClick={() => context.onClickAdd()}>
          Add
        </button>
      </div>

  );
};

export default ToDoInput;
