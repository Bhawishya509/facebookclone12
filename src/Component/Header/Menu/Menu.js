import React, { useEffect } from "react";
import Leftmenu from "../Menu/Leftmenu/Leftmenu.js";
import Middlemenu from "../Menu/Middlemenu/Middle.js";
import Rightmenu from "./Rightmenu/Rightmenu.js";
import menu from "./Menu.module.css";
const Menu = (props) => {
  useEffect(() => {}, []);
  // const[mdata,updatemdata]=useState(1);
  return (
    <ul className={menu.mainmenu}>
      <Leftmenu value={props.valu} />
      <Middlemenu val={props.val} />
      <Rightmenu val={props.val} />
    </ul>
  );
};
export default Menu;
