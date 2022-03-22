import React, { useState, useEffect } from "react";
import headcss from "./Header.module.css";
import { FaFacebook, FaSearch, FaBell, FaUserFriends } from "react-icons/fa";
import { AiOutlineHome, AiOutlineShop } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { RiYoutubeLine, RiMessengerFill } from "react-icons/ri";
import { CgProfile, CgMenuGridR } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import Messengerpopup from "./Messengerpopup";

const Header = (props) => {
  const [set, update] = useState(0);
  const click = () => {
    update(!set);
  };
  useEffect(() => {});
  const clic = (event) => {
    props.data(1);
  };

  //       setcolor((obj)=>
  //       {

  //        let temp={...obj};
  //        temp["marketlogo"]="blue";
  //         return {...temp}

  //       });
  // }
  return (
    <div className={headcss.home}>
      <div className={headcss.heading}>
        <div className={headcss.searchflogo}>
          <div className={headcss.flog}>
            <FaFacebook className={headcss.facebook} />
          </div>
          <div type="text" className={headcss.logosearch}>
            <div className={headcss.logo}>
              <FaSearch className={headcss.fasearch} />
            </div>

            <input
              type="text"
              className={headcss.input}
              placeholder="Search Facebook"
            />
          </div>
        </div>

        {/*home ky lia 5 menu*/}
        <div className={headcss.menu}>
          <div className={headcss.homes}>
            <AiOutlineHome className={headcss.homeslogo} />
          </div>

          <div className={headcss.friend}>
            <FaUserFriends className={headcss.friendlogo} />
          </div>

          <div className={headcss.watch}>
            <RiYoutubeLine className={headcss.watchlogo} />
          </div>

          <div className={headcss.market}>
            <AiOutlineShop className={headcss.marketlogo} />
          </div>

          <div className={headcss.group}>
            <MdGroup className={headcss.grouplogo} />
          </div>

          {/* last wala menu ha*/}
        </div>

        <div className={headcss.last}>
          <div className={headcss.profile}>
            <CgProfile className={headcss.profilepic} />
            <div className={headcss.profilename}>
              <p className={headcss.paraprofile}>{props.valu}</p>
            </div>
          </div>

          <div className={headcss.menu2}>
            <CgMenuGridR className={headcss.menu3} />
          </div>

          <div className={headcss.messengerchat}>
            <RiMessengerFill className={headcss.messenger2} onClick={click} />

            {set === 1 ? <Messengerpopup valu={props.val} /> : ""}
          </div>

          <div className={headcss.notification}>
            <FaBell className={headcss.notification2} />
          </div>

          <div className={headcss.accountmenu} onClick={clic}>
            <IoMdArrowDropdown className={headcss.accountmenu2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
