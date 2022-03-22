import React, { useState, useEffect } from "react";
// import {Routes,Route,NavLink, Router,Link} from "react-router-dom";
import Home from "./Component/Homepage/Home.js";
import CreateAccount from "./Component/CreateAccount/CreateAccount.js";
import Header from "./Component/Header/Header.js";
import Menu from "./Component/Header/Menu/Menu.js";
// import apcs from "./App.css";

const App = () => {
  const [set1, update1] = useState("Demo");

  const [array, updatearray] = useState([]);
  const data = () => {
    fetch("https://api.github.com/users")
      .then((data1) => {
        return data1.json();
      })
      .then((data2) => {
        updatearray(data2);
      });
  };
  useEffect(() => {
    data();
    console.log("byye");
  }, []);

  useEffect(() => {}, []);

  //    for(let a=0;a<=user.length;a++){console.log(user[a])}
  const [useset, setst] = useState(1);

  return (
    <>
      {useset === 1 ? <Home data={setst} valu={update1} /> : " "}

      {useset === 2 ? <CreateAccount data={setst} /> : " "}
      {useset === 3 ? <Header data={setst} valu={set1} /> : " "}

      {useset === 3 ? <Menu props val={array} valu={set1} /> : " "}
    </>
  );
};
export default App;
