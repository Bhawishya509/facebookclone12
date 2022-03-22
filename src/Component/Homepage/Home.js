import React, { useState, useEffect } from "react";
import hmcs from "./Home.module.css";
import { BiHide, BiShow } from "react-icons/bi";

const Home = (props) => {
  const [change, update] = useState({ tr: true, type: "password" });
  const [set, update1] = useState({ password: "", email: "" });
  const dataupdate = (event) => {
    const { name, value } = event.target;
    update1((data) => {
      let b = { ...data };
      b[name] = value;
      return b;
    });
  };

  const chan = (event) => {
    if (change.tr === true) {
      update((data) => {
        return { ...data, type: "text", tr: !data.tr };
      });
    } else {
      update((prev) => {
        return { ...prev, tr: !prev.tr, type: "password" };
      });
    }
  };
  useEffect(() => {}, []);
  let b = "facebook";
  const clic = (event) => {
    props.data(2);
  };
  const clic2 = () => {
    props.data(3);
  };

  return (
    <>
      <div className={hmcs.body}>
        {/*main block home page ki*/}

        <div className={hmcs.homemainblock}>
          {/*facebook logo text*/}
          <div className={hmcs.facebooklogotext}>
            <div className={hmcs.facebooklogo}>{b}</div>
            <p className={hmcs.parafacebooklogo}>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* input box*/}
          <div className={hmcs.block}>
            <div className={hmcs.loginbox}>
              <div className={hmcs.modename}>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  id={hmcs.email}
                  name="email"
                  value={set.email}
                  onChange={dataupdate}
                />
                <div className={hmcs.logo}></div>
              </div>
              <div className={hmcs.passwordlogo}>
                <input
                  type={change.type}
                  placeholder="Password"
                  id={hmcs.password}
                  name="password"
                  value={set.password}
                  onChange={dataupdate}
                />

                <div className={hmcs.show} onClick={chan}>
                  {change.tr ? <BiHide /> : <BiShow />}
                </div>
              </div>
              <button id={hmcs.butto} onClick={clic2} name="ok">
                {" "}
                <p className={hmcs.para5}>Log In</p>{" "}
              </button>
              <a
                href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
                className={hmcs.forgetpassword}
              >
                Forgotten Password?
              </a>
              <div className={hmcs.line}></div>
              <div className={hmcs.createaccount}>
                <div
                  className={hmcs.createaccount2}
                  onClick={clic}
                  name="create"
                >
                  Create New Account
                </div>
              </div>
            </div>
            <div className={hmcs.pupu}>
              <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">
                <span className={hmcs.span1}> Create a Page </span>
              </a>{" "}
              <span>for a celebrity, brand or business.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
