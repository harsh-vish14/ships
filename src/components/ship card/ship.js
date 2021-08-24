import React, { useState, useEffect } from "react";
import arrayToString from "../../utils/arrayToString";
import classes from "./ship.module.css";
const data = {
  home_port: "Port Canaveral",
  image: "https://i.imgur.com/MtEgYbY.jpg",
  name: "GO Ms Tree",
  roles: ["Fairing Recovery"],
};
const ShipCard = ({ home_port, image, name, roles }) => {
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(arrayToString(roles));
  }, []);
  return (
    <div className={classes.shipCard}>
      <div
        className={classes.image}
        style={{
          background: `URL(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={classes.details}>
        <div>NAME: {name}</div>
        <div>
          <div>HOME PORT: {home_port}</div>
          <div>ROLE: {role}</div>
        </div>
      </div>
    </div>
  );
};
export default ShipCard;
