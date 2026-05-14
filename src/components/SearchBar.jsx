import React, {
  useContext,
  useRef,
} from "react";

import { TaskContext } from "../context/TaskContext";

function SearchBar() {

  const { setSearchTerm } = useContext(TaskContext);

  /*
    useRef stores reference
    without unnecessary re-renders
  */
  const searchRef = useRef();

  function handleSearch() {

    /*
      Access current input value
    */
    setSearchTerm(searchRef.current.value);
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Search tasks..."
        ref={searchRef}
        onChange={handleSearch}
      />

    </div>
  );
}

export default SearchBar;
