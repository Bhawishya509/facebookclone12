import React from "react";
import mcs from "./Middle.module.css";

const Logo = (props) => {
  //
  let b = props.value.avatar_url;
  // let b=props.value.url
  const col = {
    // backgroundColor:props.val,
    backgroundImage: `url(${b})`,
  };
  return (
    <>
      <div style={col} className={mcs.storybox2}>
        <div className={mcs.logo2}>
          <div style={col} className={mcs.logophoto2} />
        </div>
        <div className={mcs.photo2} />
        <div className={mcs.name2}>{props.value.login}</div>
      </div>
    </>
  );
};

export default Logo;
