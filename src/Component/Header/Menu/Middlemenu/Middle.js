import React, { useEffect } from "react";
import mcs from "./Middle.module.css";
import Logo from "./Logo";
import { BsArrowRightShort } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import Logo3 from "./Logo3";
import Page from "./Page";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { nanoid } from "nanoid";

const Middle = (props) => {
  console.log("middle");
  useEffect(() => {}, []);
  return (
    <div className={mcs.hdiv}>
      <div className={mcs.mdiv}>
        {/* YA FIRST BLOCK HA JO CREATE STORY HA*/}
        <div className={mcs.storybox1}>
          <div className={mcs.photo1} />

          <div className={mcs.logo1}>
            <AiOutlinePlusCircle className={mcs.logophoto1} />
          </div>
          <div className={mcs.name1}>{"Create story"}</div>
        </div>

        <div className={mcs.container}>
          {props.val.map((demo) => {
            return <Logo key={nanoid()} value={demo} />;
          })}
        </div>
        <div className={mcs.arrow}>
          <BsArrowRightShort className={mcs.arrowlogo} />
        </div>
      </div>

      {/*middle wala*/}

      <div className={mcs.innerblock}>
        <div className={mcs.mindinnerblock}>
          <div className={mcs.mindinputlogo}>
            <div className={mcs.kuku}>
              <CgProfile
                style={{ fontSize: `${"2.4rem"}`, color: `${"#bfc2c6"}` }}
                className={mcs.innerblockmindlogo}
              />
            </div>
            <input
              type="text"
              className={mcs.mindinput}
              placeholder="What's on your mind, demo?"
            ></input>
          </div>

          <div className={mcs.mindline} />

          <div className={mcs.mindvideophoto}>
            <div className={mcs.videophotoemojilogoname}>
              <div className={mcs.videophoto}>
                <FaVideo className={mcs.videologo} />
              </div>
              <div className={mcs.videoname}>Live video</div>
            </div>

            <div className={mcs.videophotoemojilogoname}>
              <div className={mcs.galaryphoto}>
                {" "}
                <IoMdPhotos className={mcs.galarylogo} />
              </div>
              <div
                style={{ marginLeft: `${"4px"}` }}
                className={mcs.galaryname}
              >
                Photo/video
              </div>
            </div>

            <div className={mcs.videophotoemojilogoname}>
              <div className={mcs.emojiphoto}>
                <BiHappyAlt className={mcs.happyemoji} />
              </div>
              <div style={{ marginLeft: `${"4px"}` }} className={mcs.emojiname}>
                Felling/Activity
              </div>
            </div>
          </div>
        </div>

        <div className={mcs.createroom}>
          <div className={mcs.videocreatelogo}>
            <div>
              <FaVideo className={mcs.videocreatelogo1} />
            </div>
            <div className={mcs.videocreatelogoname}>Create Room</div>
          </div>

          <div className={mcs.logo12}>
            {props.val.map((data) => {
              return <Logo3 key={nanoid()} value={data} />;
            })}
          </div>
        </div>

        {props.val.map((demo) => {
          return <Page key={nanoid()} value={demo} />;
        })}
      </div>
    </div>
  );
};

export default Middle;
