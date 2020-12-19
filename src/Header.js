import React, { useState } from "react";
import "./header.scss";
import { withRouter, NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [showNavItem, setShowNavItem] = useState(false);
  return (
    <>
      <header className="d-flex justify-content-center">
        {/* <input type="checkbox" id="toggler"></input> */}
        <label htmlFor="toggler">
          <div
            className={`hamburger-container ${showNavItem ? "active" : ""}`}
            onClick={() => setShowNavItem(!showNavItem)}
          >
            <span></span>
            <span></span>
          </div>
        </label>

        <div className={`header-nav-items-rwd ${showNavItem ? "active" : ""}`}>
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
        <div className="header-nav-items">
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
            {/* <span style={{ transform: "translateX(50px)", fontSize: "24px" }}>
              {props.auth ? (
                <Link to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              ) : (
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
              )}
            </span> */}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
