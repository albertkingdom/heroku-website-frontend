import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo/Todo";
import Ptt from "./Ptt/Ptt";
import Header from "./Header";
import Page404 from "./component/Page404";

import Project from "./Project/Project";
import Practice_lifehacker from "./Practice/Practice_lifehacker";
import Home_rev2 from "./Home/Home_rev2";
import Timeline from "./timeline/Timeline";
import Login from "./containers/login/Login";
import Logout from "./containers/Logout/Logout";
import Layout from "./component/UI/Layout";

class App extends Component {
  state = {
    token: "",
    isAuth: false,
  };
  saveAuthInfo = (newtoken) => {
    this.setState({ token: newtoken });
  };
  //設定登入state
  isAuthHandler = () => {
    this.setState({ ...this.state, isAuth: !this.state.isAuth });
  };
  componentDidMount() {
    if (
      new Date(localStorage.getItem("expire")).getTime() > new Date().getTime()
    ) {
      this.setState((prevState) => ({ ...this.prevState, isAuth: true }));
    } else {
      this.setState((prevState) => ({ ...this.prevState, isAuth: false }));
    }
  }

  render() {
    return (
      <Router>
        <>
          <Header auth={this.state.isAuth} />

          <Layout>
            <Switch>
              <Route exact path="/">
                <Home_rev2 />
              </Route>
              {/* <div style={{ paddingTop: "70px" }}> */}

              <Route path="/project">
                <Project />
              </Route>
              <Route path="/ptt">
                <Ptt />
              </Route>

              {/* if localstorage的expire時間>現在時間，就可以看到Todo */}
              <Route
                path="/todo"
                render={() =>
                  new Date(localStorage.getItem("expire")).getTime() >
                  new Date().getTime() ? (
                    <Todo />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route path="/practice_lifehacker">
                <Practice_lifehacker />
              </Route>
              <Route path="/timeline">
                <Timeline />
              </Route>
              <Route
                path="/login"
                render={(props) => (
                  <Login
                    {...props}
                    auth={this.saveAuthInfo}
                    isAuth={this.isAuthHandler}
                  />
                )}
              ></Route>
              <Route
                path="/logout"
                render={(props) => (
                  <Logout
                    {...props}
                    auth={this.saveAuthInfo}
                    isAuth={this.isAuthHandler}
                  />
                )}
              ></Route>

              <Route component={Page404}></Route>
              {/* </div> */}
            </Switch>
          </Layout>
        </>
      </Router>
    );
  }
}

export default App;
