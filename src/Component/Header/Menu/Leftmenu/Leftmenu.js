import React, { useState, useEffect } from "react";
import leftcs from "./Leftmenu.module.css";
import { CgProfile, CgGames } from "react-icons/cg";
import { FaUserFriends, FaEgg } from "react-icons/fa";
import { AiFillStar, AiFillFlag, AiOutlineIdcard } from "react-icons/ai";
// import {FiYoutube} from 'react-icons/fi';
import { BsClockHistory, BsYoutube, BsMessenger } from "react-icons/bs";
import { RiSave3Fill } from "react-icons/ri";
import {
  MdGroup,
  MdEventAvailable,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { HiSpeakerphone } from "react-icons/hi";
import {
  GiNetworkBars,
  GiThreeFriends,
  GiBrokenHeartZone,
} from "react-icons/gi";
import { SiFacebooklive, SiMessenger } from "react-icons/si";
import { TiWeatherSnow } from "react-icons/ti";
import { nanoid } from "nanoid";

const Leftmenu = (props) => {
  const [lis, updatelist] = useState([]);
  const [lis2, updatelist2] = useState(12);
  useEffect(() => {}, [lis]);

  const data = (event) => {
    updatelist([]);
    if (lis2 === 23) updatelist2(12);
    else if (lis2 === 12) updatelist2(23);
  };

  let icon = [
    <CgProfile />,
    <FaUserFriends style={{ color: "rgb(140, 250, 205)" }} />,
    <ImHome />,
    <BsYoutube style={{ color: "red" }} />,
    <BsClockHistory style={{ color: "green" }} />,

    <RiSave3Fill style={{ color: "purple" }} />,
    <MdGroup />,
    <AiFillFlag style={{ color: "rgb(219, 40, 85)" }} />,
    <MdEventAvailable style={{ color: "orange" }} />,
    <AiOutlineIdcard />,
    <AiFillStar style={{ color: "rgb(169, 37, 195" }} />,
    <BiChevronDown onClick={data} id={1} />,
    <HiSpeakerphone />,

    <GiNetworkBars style={{ color: "green" }} />,

    <FaEgg style={{ color: "red" }} />,
    <MdOutlineHealthAndSafety style={{ color: "green" }} />,
    <GiThreeFriends style={{ color: "rgb(169, 37, 195" }} />,
    <GiBrokenHeartZone style={{ color: "hotpink" }} />,
    <SiFacebooklive style={{ color: "red" }} />,
    <BsMessenger />,
    <SiMessenger style={{ color: "green" }} />,
    <CgGames />,
    <TiWeatherSnow style={{ color: "orange" }} />,
  ];

  let name = [
    `${props.value}`,
    "Friends",
    "Marketplace",
    "Watch",
    "Memories",
    "Groups",
    "Saved",
    "Pages",
    "Events",
    "Most recent",
    "Favourites",
    "See more",
    "Ad Center",
    "Ads Manager ",
    "Blood Donations",
    "Emotional Health",
    "Friend lists",
    "Fundraisers",
    " Live Videos",
    " Messenger",
    "Messenger Kids",
    "Playgames",
    "Weather",
  ];

  for (let a = 0; a < lis2; a++) {
    if (lis2 === 23) {
      if (a === 11) continue;
    }
    lis.push(
      <>
        <div className={leftcs.mainlogo}>{icon[a]}</div>
        <div className={leftcs.mainname}>{name[a]}</div>
      </>
    );
    if (a === 22) {
      lis.push(
        <>
          <div className={leftcs.mainlogo}>
            {<BiChevronUp onClick={data} />}
          </div>
          {/* {let b="Less more"} */}
          <div className={leftcs.mainname}>{(name[11] = "Less see")}</div>
        </>
      );
    }
  }

  return (
    <>
      <div className={leftcs.leftmenu}>
        <div className={leftcs.mainblock}>
          {lis.map((data) => {
            return (
              <li key={nanoid()} className={leftcs.main}>
                {data}
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Leftmenu;
