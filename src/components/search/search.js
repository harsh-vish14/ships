import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import classes from "./search.module.css";
const Search = ({ searched }) => {
  const searchText = useRef();
  const onSearchChange = () => {
    const text = searchText.current.value;
    searched(text);
  };
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search Ship"
        ref={searchText}
        onChange={onSearchChange}
      />
      <FiSearch className={classes.icon} />
    </div>
  );
};

export default Search;
