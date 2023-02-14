import React, { useContext } from "react";
import { ToDoListContext } from "../context";
import Select from "react-select";

const SearchBar = (props) => {
  const context = useContext(ToDoListContext);
  // const [selectedOptions, setSelectedOptions] = useState();
  return (
    <div>
      <h2>Choose your color</h2>
      <div className="dropdown-container">
        {/* <input id="input1" hidden="hidden" placeholder="input data" /> */}
        {/* <select 
        id="select1"
        onChange={(e) => context.handleSelect(e.target.value)}
        value={context.selectedOptions}
        style={{width: 200, height: 50, padding: 10}} 
         placeholder="Select color">
            <option value="0">-make your own choice-</option>
           return {context.optionsList.map(eachData => {
            return <option key={eachData.value} value={eachData.value}>{eachData.label}</option>
           })}
        </select> */}
        <Select
          onChange={(e) => context.handleSelect(e.target.value)}
          value={context.selectedOptions}
          options={context.optionsList}
        />
        isSearchable={true}
        placeholder="Select color"
        isMulti
      </div>
      <div>
        <h4></h4>
      </div>
    </div>
  );
};

export default SearchBar;
