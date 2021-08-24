import React from "react";
import classes from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={process.env.PUBLIC_URL + "/images/spacex.png"} />
    </div>
  );
};

export default Navbar;
