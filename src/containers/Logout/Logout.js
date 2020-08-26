import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  componentDidMount() {
    console.log("[Logout] mount", this.props);
    localStorage.removeItem("token");
    localStorage.removeItem("expire");
    this.props.isAuth(); //{isAuth:false}
    this.props.auth(""); //delete token in App.js
  }
  render() {
    //立刻重新導向
    return <Redirect to="/" />;
  }
}

export default Logout;
