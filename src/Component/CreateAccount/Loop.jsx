import React, { useState } from "react";

const Loop = (props) => {
  for (let a = props.start; a <= props.end; a++) {
    {
      props.valu((kuku) => {
        kuku.push(a);
        return kuku;
      });
    }
  }
  return <>{}</>;
};

export default Loop;
