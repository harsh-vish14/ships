import React, { useState } from "react";
import filter from "../../utils/search";
import Search from "../search/search";
import ShipCard from "../ship card/ship";
import classes from "./main.module.css";

const Main = ({ response }) => {
  const [searched, setSearched] = useState(response);
  const onSearchChange = (searchText) => {
    if (searchText.length) {
      setSearched(filter(response, searchText));
    } else {
      setSearched(response);
    }
  };
  return (
    <div>
      <Search searched={onSearchChange} />
      <div className={classes.main}>
        <div className={classes.total}>TOTAL COUNT: {searched.length}</div>

        {searched.length == 0
          ? `NO DATA FOUND`
          : searched.map((ship) => {
              return (
                <ShipCard
                  home_port={ship.home_port}
                  image={ship.image}
                  name={ship.name}
                  roles={ship.roles}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Main;
