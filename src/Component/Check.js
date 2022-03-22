import React, { useState } from "react";

const Check = () => {
  const [change, update] = useState(10);
  alert("ok");
  return (
    <>
      <div
        style={{ backgroundColor: "red" }}
        onClick={() => {
          update((data) => {
            let f = 10;
            return f;
          });
        }}
      >
        {" "}
        {change}{" "}
      </div>
    </>
  );
};

export default Check;
