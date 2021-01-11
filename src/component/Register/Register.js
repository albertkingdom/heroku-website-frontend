import React, { useState } from "react";
import styles from "../Signin/Signin.module.css";
import PasswordInput from "../Signin/PasswordInput";

export default function Register({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const signupHandler = (event) => {
    event.preventDefault(); //in form, button onclick will act as submit
    // console.log("submit");
    const logindata = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    fetch("http://localhost:6001/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          //   console.log(user);
          history.replace("/signin");
        }
      });
  };

  const changePassword = (value) => {
    setPassword(value);
  };
  const keyUphandler = (event) => {
    //click enter to signin
    // keyCode 13 is Enter key
    if (event.keyCode === 13) {
      // console.log("enter");
      signupHandler(event);
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.Login}>
        <h5>Taiwan Stock App</h5>
        <form>
          <section>
            <label>
              Email:
              <input
                type="text"
                placeholder="test@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </section>
          <section>
            <label>
              Password:
              <PasswordInput
                password={password}
                changePassword={changePassword}
                keyUphandler={keyUphandler}
                placeholder=""
              />
            </label>

            <label>
              Confirm your password:
              <input
                type="password"
                placeholder="請再輸入一次密碼"
                value={passwordcheck}
                onChange={(e) => setPasswordcheck(e.target.value)}
                required
              />
            </label>
          </section>

          <button onClick={signupHandler}>Register</button>
        </form>
      </div>
    </div>
  );
}
