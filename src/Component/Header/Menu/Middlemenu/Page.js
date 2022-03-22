import React from "react";
import pcs from "./Page.module.css";
import { BsThreeDots, BsCamera } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GiFeatheredWing } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";

const Page = (props) => {
  let b = props.value.avatar_url;
  const col = {
    backgroundImage: `url(${b})`,
  };
  let f = props.value.login;
  let comment = "1 comment";
  let like = "Like";
  let commme = "Comment";
  let share = "Share";
  return (
    <div style={col} className={pcs.page}>
      <div className={pcs.headerpara}>
        <div className={pcs.headernamephoto}>
          <div
            style={{ backgroundImage: `url(${b})` }}
            className={pcs.headerphoto}
          />
          <div className={pcs.headername}>{f}</div>
        </div>

        <div className={pcs.heSaderopition}>
          <div className={pcs.headeroptionicon}>
            <BsThreeDots />
          </div>
        </div>
      </div>

      <div className={pcs.harderfooter}>
        <div className={pcs.firstline}>
          <div className={pcs.likenamelogo}>
            <BiLike className={pcs.likelogo} />
            <div className={pcs.likecount}> 5</div>
          </div>
          <div className={pcs.commentcount}> {comment}</div>
        </div>

        <div className={pcs.likecommentshare}>
          <div className={pcs.likeslogoname}>
            <BiLike className={pcs.likeslogo} />
            <div className={pcs.likesname}>{like} </div>
          </div>

          <div className={pcs.likeslogoname}>
            <FiMessageSquare className={pcs.comentlogo} />
            <div className={pcs.commentname}>{commme} </div>
          </div>

          <div className={pcs.likeslogoname}>
            <IoIosShareAlt className={pcs.sharelogo} />
            <div className={pcs.sharename}>{share} </div>
          </div>
        </div>

        <div className={pcs.footerinputlogo1}>
          <div className={pcs.footerinputphoto} />

          <div className={pcs.footerinput}>
            <input
              type="text"
              className={pcs.footerinput1}
              placeholder="Write a comment..."
            />
            <div className={pcs.footerinput2}>
              <HiOutlineEmojiHappy className={pcs.chgs} />
              <BsCamera className={pcs.chgs} />
              <GiFeatheredWing className={pcs.chgs} />
              <SiHappycow className={pcs.chgs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
