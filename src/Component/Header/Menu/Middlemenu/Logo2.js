import React from "react";
import mcs from "./Middle.module.css";

const Logo2 = (props) => {
  //  let b="https://i.pinimg.com/236x/59/fb/97/59fb9783cdfc6bdbde5ca713583aab9e.jpg";
  let b = props.value.avatar_url;
  const col = {
    // backgroundColor:props.val,
    backgroundImage: `url(${b})`,
  };
  return (
    <>
      <div className={mcs.logo13}>
        <div style={col} className={mcs.logophoto14}>
          <div className={mcs.logo15} />
        </div>
      </div>
    </>
  );
};

export default Logo2;
