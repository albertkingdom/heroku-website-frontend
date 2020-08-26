import React, { Component } from "react";
import Modal from "../../component/Modal/Modal";
import styles from "./Login.module.css";
class Login extends Component {
  state = {
    modalshow: true,
    submitData: {
      email: "",
      password: "",
    },
    email: "",
    password: "",
    token: "",
    errorMsg: "",
  };
  componentDidMount() {
    console.log("[Login] props", this.props);
  }
  showModal = () => {
    this.setState({ modalshow: !this.state.modalshow }); //close modal
    this.props.history.goBack(); //回到上一頁
  };
  emailInputHandler = (event) => {
    //使用arrow function綁定this到Login.js
    // console.log(event.target.value);
    // this.setState((prevState) => ({
    //   ...prevState,
    //   submitData: { ...prevState.submitData, email: e.target.value }
    // }));
    this.setState({ ...this.state, email: event.target.value });
  };
  passwordInputHandler = (event) => {
    this.setState({ ...this.state, password: event.target.value });
  };
  signinHandler = (event) => {
    event.preventDefault();
    // console.log("submit");
    const logindata = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMxH3deIFe8RlLRUi4mPHZd_T4flPctOM",
      {
        body: JSON.stringify(logindata),
        method: "POST",
        contentType: "application/json",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          //成功登入
          // this.setState({ ...this.state, token: data.idToken });
          this.props.auth(data.idToken);
          this.props.isAuth();
          const expirationDate = new Date(
            new Date().getTime() + data.expiresIn * 1000
          );
          //登入狀態存入localstorage
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("expire", expirationDate);
        } else {
          //錯誤訊息
          this.setState({ ...this.state, errorMsg: data.error.message });
        }

        // this.props.history.goBack();
        this.showModal();
      })
      .catch((error) => console.log("error", error));
  };
  signupHandler = (event) => {
    event.preventDefault();
    // console.log("submit");
    const signupdata = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMxH3deIFe8RlLRUi4mPHZd_T4flPctOM",
      { body: JSON.stringify(signupdata), method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          this.setState({ ...this.state, token: data.idToken });
          alert("成功註冊");
        } else {
          //錯誤訊息
          this.setState({ ...this.state, errorMsg: data.error.message });
          alert("失敗註冊");
        }
        //導回首頁
        this.props.location.replace("/");
      })
      .catch((error) => {
        console.log("error", error);
        //導回首頁
        this.props.history.replace("/");
      });
  };
  render() {
    return (
      <>
        <Modal show={this.state.modalshow} toClose={this.showModal}>
          <div className={styles.Login}>
            <h1>Login</h1>
            <p className={styles.p}>{this.state.errorMsg}</p>
            <form>
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.emailInputHandler}
              />

              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.passwordInputHandler}
                required
              />
              <button onClick={this.signinHandler}>sign in</button>
              <span onClick={this.signupHandler}>sign up</span>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Login;
