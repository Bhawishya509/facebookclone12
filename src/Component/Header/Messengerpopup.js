import React, { useEffect } from "react";
import mmcs from "./Messengerpopup.module.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { MdVideoCall, MdStickyNote2 } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import Messengerlogo from "./Messengerlogo";

const Messengerpopup = (props) => {
  useEffect(() => {}, []);
  return (
    <div className={mmcs.messengerpopup1}>
      <div className={mmcs.messengersearchbox}>
        <div className={mmcs.Messengenamelogo}>
          <div className={mmcs.Messengername1}>{"Messenger"}</div>
          <div className={mmcs.Messengenamelogo1}>
            <BsThreeDots
              style={{ color: "black" }}
              className={mmcs.searchlogo}
            />
            <AiOutlineSlackSquare
              style={{ color: "purple" }}
              className={mmcs.searchlogo}
            />
            <MdVideoCall
              style={{ color: "blue" }}
              className={mmcs.searchlogo}
            />
            <MdStickyNote2
              style={{ color: "green" }}
              className={mmcs.searchlogo}
            />
          </div>
        </div>

        <div className={mmcs.searchbox}>
          <div className={mmcs.searchboxicon}>
            <BiSearch />
          </div>
          <input
            className={mmcs.searchboxinput}
            type="text"
            placeholder="Search Messenger"
          />
        </div>
      </div>

      <div className={mmcs.logobox}>
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
        <Messengerlogo />
      </div>

      <div className={mmcs.footer1}>See all in Messenger</div>
    </div>
  );
};

export default Messengerpopup;
