import React, { Component } from "react";

const ToDoListContext = React.createContext();

class ToDoListProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      listPresent: true,
      currentTodo: {}, //id: "aeee438f-6f43-4460-87c1-cbf65734635c"
    //   status: "incomplete"
    //   time: "08/01/2023, 12:58:57"
    //   title: "Buy dress"
    };
  }



  onClickAdd = () => {
    if (this.state.currentTodo !== "") {
      const { toDoList, currentTodo } = this.state;
      this.setState({ toDoList: [...toDoList, currentTodo] });
      this.setState({ currentTodo: "" });
    }
  };

  onChangeInput = (e, id, status = 'Incomplete', ) => {
    this.setState({ currentTodo: e.target.value });
  };

  onDelete = (item) => {
    if (item !== "") {
      const { toDoList } = this.state;
      const newList = toDoList.filter((list) => list !== item);
      this.setState({ toDoList: newList });
    }
  };

  render() {
    return (
      <ToDoListContext.Provider
        value={{
          list: this.state.toDoList,
          currentTodo: this.state.currentTodo,
          isPresent: this.state.listPresent,
          onClickAdd: this.onClickAdd,
          onChangeInput: this.onChangeInput,
          onDelete: this.onDelete,
        }}
      >
        {this.props.children}
      </ToDoListContext.Provider>
    );
  }
}

export { ToDoListContext, ToDoListProvider };
