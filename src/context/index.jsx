import { Component, createContext } from "react";

// interface AppContextInterface {
//   list: string[],
//   currentTodo: String,
//   onClickAdd: () => void,
//   onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, id: string, status: string) => void,
//   onDelete: (list: string[]) => void
// }
// interface toDoState {
//   toDoList: string[],
//   listPresent: Boolean,
//   currentTodo: String,
//    title: String
// }

const ToDoListContext = createContext();

class ToDoListProvider extends Component {
 state = {
      toDoList: [],
      listPresent: true,
      currentTodo: '',
       title: "Buy dress",
       optionsList: [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
      ],
      selectedOptions: ''
    };
  
  onHandleSelect = (value) => {
    debugger
  this.setState({
  selectedOptions: value
})
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
          onClickAdd: this.onClickAdd,
          onChangeInput: this.onChangeInput,
          onDelete: this.onDelete,
          optionsList: this.state.optionsList,
          selectedOptions: this.state.selectedOptions,
          handleSelect: this.onHandleSelect
        }}
      >
        {this.props.children}
      </ToDoListContext.Provider>
    );
  }
}

export { ToDoListContext, ToDoListProvider };
