import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";
import PasswordInput from "./PasswordInput";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadUserId } from "../../actions/useraction";

export default function Signin({ history, changeAuth, saveAuthInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const saveAuthTokenToSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };
  const signinHandler = (event) => {
    event.preventDefault(); //in form, button onclick will act as submit
    // console.log("submit");
    const logindata = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    fetch("https://ptt-todolist-api.herokuapp.com/signinadvanced", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.userId && data.success === "true") {
          saveAuthTokenToSession(data.token);
          saveAuthInfo(data.token);
          dispatch(loadUserId(data.userId, data.email));
          changeAuth(true);
          history.replace("/");
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
      signinHandler(event);
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
                placeholder="test123456"
              />
            </label>
          </section>

          <button onClick={signinHandler}>sign in</button>
          <p>
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
