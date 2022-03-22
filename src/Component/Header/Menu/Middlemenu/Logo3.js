import React from "react";
import mcs from "./Middle.module.css";
const Logo3 = (props) => {
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

export default Logo3;
