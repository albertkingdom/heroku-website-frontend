import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserId } from "./actions/useraction";

// import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Ptt from "./Ptt/Ptt";
import Header from "./component/Header/Header";
import Page404 from "./component/Page404";

// import Project from "./Project/Project";
// import Practice_lifehacker from "./Practice/Practice_lifehacker";
// import Home_rev2 from "./Home/Home_rev2";
// import Timeline from "./timeline/Timeline";
// import Login from "./containers/login/Login";
// import Logout from "./containers/Logout/Logout";
import Layout from "./component/UI/Layout";
import Signin from "./component/Signin/Signin";
import Register from "./component/Register/Register";

const App = () => {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const saveAuthInfo = (newtoken = "") => {
    setToken(newtoken);
  };
  //設定登入state
  const isAuthHandler = (value) => {
    setIsAuth(value);
  };
  useEffect(() => {
    // if (
    //   new Date(localStorage.getItem("expire")).getTime() > new Date().getTime()
    // ) {
    //   this.setState((prevState) => ({ ...this.prevState, isAuth: true }));
    // } else {
    //   this.setState((prevState) => ({ ...this.prevState, isAuth: false }));
    // }
    //check token exist, if exist and then auto login
    const token = window.sessionStorage.getItem("token");
    //之前有登入過，並未登出，取sessionStorage的token登入取得userId
    if (token) {
      setToken(token);
      fetch("https://ptt-todolist-api.herokuapp.com/signinadvanced", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: token },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.id) {
            isAuthHandler(true);
            dispatch(loadUserId(data.id));
          }
        })
        .catch(console.log);
    }
  }, [dispatch]);

  return (
    <Router>
      <>
        <Header auth={isAuth} changeAuth={isAuthHandler} />

        <Layout>
          <Switch>
            <Route exact path="/">
              {/* <Home_rev2 /> */}
            </Route>

            <Route path="/project">{/* <Project /> */}</Route>
            <Route path="/ptt">
              <Ptt />
            </Route>

            {/* if localstorage的expire時間>現在時間，就可以看到Todo */}
            <Route
              path="/todo"
              // render={() =>
              //   new Date(localStorage.getItem("expire")).getTime() >
              //   new Date().getTime() ? (
              //     <TodoList />
              //   ) : (
              //     <Redirect to="/login" />
              //   )
              // }
              render={(props) =>
                isAuth ? (
                  <TodoList {...props} token={token} />
                ) : (
                  <Signin
                    {...props}
                    changeAuth={isAuthHandler}
                    saveAuthInfo={saveAuthInfo}
                  />
                )
              }
            />
            <Route path="/practice_lifehacker">
              {/* <Practice_lifehacker /> */}
            </Route>
            <Route path="/timeline">{/* <Timeline /> */}</Route>
            {/* <Route
                path="/login"
                render={(props) => (
                  <Login
                    {...props}
                    auth={this.saveAuthInfo}
                    isAuth={this.isAuthHandler}
                  />
                )}
              ></Route> */}
            <Route
              path="/signin"
              render={(props) => (
                <Signin
                  {...props}
                  changeAuth={isAuthHandler}
                  saveAuthInfo={saveAuthInfo}
                />
              )}
            ></Route>
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            ></Route>
            {/* <Route
                path="/logout"
                render={(props) => (
                  <Logout
                    {...props}
                    auth={this.saveAuthInfo}
                    isAuth={this.isAuthHandler}
                  />
                )}
              ></Route> */}

            <Route component={Page404}></Route>
            {/* </div> */}
          </Switch>
        </Layout>
      </>
    </Router>
  );
};

export default App;
