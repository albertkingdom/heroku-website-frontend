import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SubFunction.module.scss";
import { loadUserId } from "../../actions/useraction";

export default function SubFunction({ changeAuth, close, auth }) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  return (
    <div className={styles.SubFunction}>
      <ul>
        {!auth ? (
          <>
            <li>
              <Link to="/signin" onClick={() => close()}>
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={styles.register}
                onClick={() => close()}
              >
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* <li style={{ borderBottom: "1px solid gray" }}>
              Signed in as <strong>{email}</strong>
            </li> */}

            <li>
              <Link
                to="/"
                onClick={() => {
                  changeAuth(false);
                  dispatch(loadUserId(""));
                  window.sessionStorage.removeItem("token");
                  close();
                }}
              >
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
