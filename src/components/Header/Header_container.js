import React from "react";
import "./Header.css";
import Header from "./Header";
import { connect } from "react-redux";
import { SetAuthUserData, LogoutThunkCreator } from "../redux/auth_reducer";
import axios from "axios";

class Header_containerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode == 0) {
          let { id, login, email } = response.data.data;
          this.props.SetAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Header loginStatus={this.props.loginStatus} 
      login={this.props.login} 
      logout={this.props.LogoutThunkCreator}/>
    );
  }
}

let mapStateToProps = (state) => ({
  loginStatus: state.Auth.isAuth,
  login: state.Auth.login,
});

let Header_container = connect(mapStateToProps, {
  SetAuthUserData,
  LogoutThunkCreator,
})(Header_containerAPI);
export default Header_container;
