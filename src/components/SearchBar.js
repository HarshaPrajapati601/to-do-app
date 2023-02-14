import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";

const SearchBar = (props) => {
  const [search, setSearch] = useState([]);


  const debounce = (fn) => {
    let timer;
    return function(...args) {
        const context = this;
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer =null;
        fn.apply(context, args);
      }, 1000);
    }
  }
  

  const handleInput = (e) => {
    const val = e.target.value
    fetch(`https://demo.dataverse.org/api/search?q=${val}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  // useCb to memoize the debounce method and not call it on evry render
  const optimisedVersion = useCallback(debounce(handleInput), []);

  // const betterFunction = doSomeMagic(getData, 300);

  return (
    <div>
      <h2>Debounce</h2>
      <div>
        <input
          type="text"
          name="search"
          onChange={optimisedVersion}
          placeholder="Enter search..."
          className="search"
        />
        {search?.length > 0 && (
          <div className="autocomplete">
            {search.map((ele, i) => {
             return <ul key={i}><li>{ele.name}</li></ul>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
