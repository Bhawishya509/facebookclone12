import React from "react";
import rcs from "./Right.module.css";
import { BiDotsHorizontal } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdVideoCall } from "react-icons/md";
import Logo2 from "../Middlemenu/Logo2";
import { nanoid } from "nanoid";

const Rightmenu = (props) => {
  console.log("right");
  return (
    <div className={rcs.hdiv}>
      <div className={rcs.mdiv}>
        <div className={rcs.sponsive}>{"Sponsored"}</div>

        <div className={rcs.secondinput}>
          <div className={rcs.contactlogo}>
            <div className={rcs.contact}>{"Contacts"}</div>
            <div className={rcs.logo}>
              <MdVideoCall className={rcs.logo2} />
              <AiOutlineSearch className={rcs.logo2} />
              <BiDotsHorizontal className={rcs.logo2} />
            </div>
          </div>

          <div className={rcs.secondinputcontact}>
            {props.val.map((data) => {
              return (
                <div key={nanoid()} className={rcs.friend}>
                  <Logo2 value={data} className={rcs.secondinputcontactlogo} />
                  <div className={rcs.secondinputlogo}>{data.login}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={rcs.groupblock}>
          <div className={rcs.groupname}>{"Group conversations"}</div>
          <div className={rcs.groupname2}>
            {props.val.map((data) => {
              return (
                <div key={nanoid()} className={rcs.friend}>
                  <Logo2 value={data} className={rcs.secondinputcontactlogo} />
                  <div className={rcs.secondinputlogo}>{data.login}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightmenu;
