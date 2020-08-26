import React from "react";
import "./header.scss";
import { withRouter, NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  useEffect(() => {
    $(window).scroll(function () {
      let scrolltop = $(window).scrollTop();

      // if (scrolltop>=100){
      //     $('header').css('background','rgba(0,0,0,1)')
      // }else{
      //     $('header').css('background','linear-gradient(to bottom, transparent, transparent 100%)')
      // }
    });
  });

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               
                <li className="nav-item">
                    <a className="nav-link" href="/todo">Todo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ptt">Ptt</a>
                </li>
                
            </ul>
        </div>
    </nav> */}
      <header className="d-flex justify-content-center">
        <input type="checkbox" id="toggler"></input>
        <label htmlFor="toggler">
          <div className="hamburger-container">
            <span></span>
            <span></span>
          </div>
        </label>

        <div className="header-nav-items-rwd">
          <ul>
            <li>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/todo">
                Todo
              </a>
            </li>
            <li>
              <a className="nav-link" href="/ptt">
                PTT八卦版
              </a>
            </li>
            <li>
              <a className="nav-link" href="/project">
                資策會專題作品
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                切版練習
              </a>
              <ul>
                <li>
                  <Link to="/timeline">時間軸</Link>
                </li>
              </ul>
            </li>
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
            <li>
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
            </li>
            {/* login button */}
            <span style={{ transform: "translateX(50px)", fontSize: "24px" }}>
              {props.auth ? (
                <Link to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              ) : (
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
              )}
            </span>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
