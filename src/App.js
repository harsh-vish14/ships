import React, { useEffect, useState } from "react";
import "./global.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
          roles
        }
      }
    `);
    setResponse(response.data.ships);
    setLoading(false);
  };

  useEffect(() => {
    fetchShips();
  }, []);
  if (loading) {
    return <AiOutlineLoading3Quarters className="loading" />;
  }
  if (response.length == 0) {
    return <div>Empty{console.log(response)}</div>;
  }
  return (
    <div className="App">
      <Navbar />
      {console.log(response)}
      <Main response={response} />
    </div>
  );
}
