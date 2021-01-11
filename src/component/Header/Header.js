import React, { useState } from "react";
import styles from "./header.module.scss";
import { withRouter, NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadUserId } from "../../actions/useraction";
import SubFunction from "./SubFunction";

const Header = ({ auth, changeAuth }) => {
  const [showNavItem, setShowNavItem] = useState(false);
  const [openAvator, setOpenAvator] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <header className="d-flex justify-content-center">
        {/* <input type="checkbox" id="toggler"></input> */}
        <label htmlFor="toggler">
          <div
            className={`${styles["hamburger-container"]} ${
              showNavItem ? styles.active : ""
            }`}
            onClick={() => setShowNavItem(!showNavItem)}
          >
            <span></span>
            <span></span>
          </div>
        </label>

        <div
          className={`${styles["header-nav-items-rwd"]} ${
            showNavItem ? styles.active : ""
          }`}
        >
          <ul>
            <li>
              <Link className="nav-link" to="/" disabled>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/todo"
                onClick={() => setShowNavItem(false)}
              >
                Todo
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/ptt"
                onClick={() => setShowNavItem(false)}
              >
                PTT八卦版
              </Link>
            </li>
            {auth ? (
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    changeAuth(false);
                    dispatch(loadUserId(""));
                    window.sessionStorage.removeItem("token");
                  }}
                >
                  {/* // <FontAwesomeIcon icon={faSignOutAlt} /> */}
                  Sign Out
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signin" className="nav-link">
                    {/* <FontAwesomeIcon icon={faSignInAlt} /> */}
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
            {/* <li>
              <Link className="nav-link" href="/project">
                資策會專題作品
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="#">
                切版練習
              </Link>
              <ul>
                <li>
                  <Link to="/timeline">時間軸</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className={styles["header-nav-items"]}>
          <ul className="d-flex justify-content-center align-items-center">
            <li>
              <NavLink
                className="nav-link"
                activeClassName="activelink"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="activelink"
                to="/todo"
              >
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="activelink"
                to="/ptt"
              >
                PTT八卦版
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className="nav-link"
                activeClassName="activelink"
                to="/project"
              >
                資策會專題作品
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="activelink"
                to="/timeline"
              >
                切版練習
              </NavLink>
              <ul>
                <li>
                  <Link to="/timeline">時間軸</Link>
                </li>
                <li>
                  <Link to="">Other</Link>
                </li>
              </ul>
            </li> */}
            {/* login button */}
            <li style={{ marginLeft: "20px" }}>
              <>
                <div>
                  <button
                    onClick={() => setOpenAvator(!openAvator)}
                    className={styles.avator}
                  >
                    <FontAwesomeIcon icon={faUserCircle} />
                  </button>
                </div>
                {openAvator && (
                  <SubFunction
                    changeAuth={changeAuth}
                    close={() => setOpenAvator(false)}
                    auth={auth}
                  />
                )}
              </>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
