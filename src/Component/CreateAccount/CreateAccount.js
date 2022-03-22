import React, { useEffect, useState } from "react";
import Styles from "./CreateAccount.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { nanoid } from "nanoid";
const CreateAccount = (props) => {
  const [use] = useState([[], []]);

  useEffect(() => {}, []);

  const change = (event) => {
    props.data(1);
  };

  for (let a = 1; a <= 31; a++) use[0].push(a);

  let da = new Date().getFullYear();

  for (let a = 1990; a <= da; a++) {
    use[1].push(a);
  }

  return (
    <>
      <div className={Styles.body2}>
        <div className={Styles.main}>
          <div className={Styles.signx}>
            <div className={Styles.sign}>Sign Up</div>
            <div className={Styles.x} onClick={change}>
              <VscChromeClose />
            </div>
          </div>

          <div className={Styles.para1}>
            <div className={Styles.para2}>It's quick and easy.</div>
          </div>

          <div className={Styles.underline}></div>

          <div className={Styles.inputblock}>
            <input className={Styles.first} placeholder="First name"></input>
            <input className={Styles.last} placeholder="Surname"></input>
          </div>

          <input
            type="email"
            placeholder="Mobile number or email address"
            className={Styles.emailid}
          ></input>

          <input
            type="password"
            placeholder="New password"
            className={Styles.password}
          ></input>

          <div className={Styles.paradate}>Date of birth</div>

          <div className={Styles.maindateofbirthblock}>
            <div className={Styles.dateofbirthblock}>
              {/* data of birth*/}

              <div className={Styles.dob}>
                <select className={Styles.dobspan}>
                  {use[0].map((data) => {
                    return (
                      <option value={data} key={nanoid()}>
                        {data}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* month ky lia */}

              <div className={Styles.month}>
                <select className={Styles.monthspan}>
                  <option> Jan</option>
                  <option> Feb</option>
                  <option selected> Mar</option>
                  <option> Apr</option>
                  <option> May</option>
                  <option> Jun</option>
                  <option> Jul</option>
                  <option> Aug</option>
                  <option> Sep</option>
                  <option> Oct</option>
                  <option> Nov</option>
                  <option> Dec</option>
                </select>
              </div>

              {/* year ky lia*/}

              <div className={Styles.year}>
                <select className={Styles.yearspan}>
                  {use[1].map((data) => {
                    return <option key={nanoid()}>{data}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className={Styles.genderclass}>Gender</div>

          <div className={Styles.genderinput}>
            {/* ya female gender ky lia ha*/}

            <div className={Styles.female}>
              <div className={Styles.female1}>{"Female"}</div>
              <input type="radio" name="gender"></input>
            </div>

            {/* ya  male gender ky lia ha*/}

            <div className={Styles.male}>
              <div className={Styles.male1}>{"Male"}</div>
              <input type="radio" name="gender"></input>
            </div>

            {/* ya custom gender ky lia ha*/}

            <div className={Styles.custom}>
              <div className={Styles.custom1}>{"Custom"}</div>
              <input type="radio" name="gender"></input>
            </div>
          </div>

          <div className={Styles.paragrafh}>
            By clicking Sign Up, you agree to our{" "}
            {<a href="https://www.facebook.com/legal/terms/update">Terms</a>},
            {
              <a href="https://www.facebook.com/about/privacy/update">
                Data Policy
              </a>
            }
            {""} and{" "}
            {
              <a href="https://www.facebook.com/policies/cookies/">
                Cookie Policy.
              </a>
            }
            You may receive SMS notifications from us and can opt out at any
            time.
          </div>

          <div className={Styles.buttonclass}>
            <button className={Styles.signup} href="kuku">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
