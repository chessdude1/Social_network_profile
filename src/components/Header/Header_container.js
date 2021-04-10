import React from "react";
import "./Header.css";
import Header from './Header'
import { connect } from "react-redux";
import {SetUserData} from '../redux/auth_reducer'
import axios from "axios";



class Header_containerAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }). then(response => {
            this.props.SetUserData(response.data.data)
        })
    }

    render () {
        return(<Header SetUserData = {this.props.email} LoginStatus = {this.props.LoginStatus} />)
    }
}

let mapStateToProps = (state) => ({
    email: state.Auth.UserData.email,
    LoginStatus : state.Auth.LoginStatus
})

let Header_container = connect(mapStateToProps, {SetUserData})(Header_containerAPI)
export default Header_container;

