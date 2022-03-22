import React from "react";
import Mlcss from "./Messengerlogo.module.css";

const Messengerlogo = (props) => {
  let b =
    "https://i.pinimg.com/236x/59/fb/97/59fb9783cdfc6bdbde5ca713583aab9e.jpg";
  const col = {
    // backgroundColor:props.val,
    backgroundImage: `url(${b})`,
    borderRadius: "50%",
    height: "98%",
    width: "26%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className={Mlcss.kuku}>
      <div style={col} className={Mlcss.photo} />

      <div className={Mlcss.namemessage}>
        <div className={Mlcss.name}>{"demo1"}</div>
        <div className={Mlcss.messagetime}>
          <div className={Mlcss.message}>{"hii"}</div>
          <div className={Mlcss.time}>{"10:45pm"}</div>
        </div>
      </div>
    </div>
  );
};

export default Messengerlogo;
