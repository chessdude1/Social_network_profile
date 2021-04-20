import React from "react";
import Profile from './Profile'
import axios from "axios";
import { connect } from "react-redux";
import {getStatus, SetUserProfile, updateStatus} from '../redux/Profile_Page_reducer'
import { withRouter } from "react-router";
import {ProfileAPI} from '../../api/api'
import { compose } from "redux";

class Profile_ContainerAPI extends React.Component {
    componentDidMount() {
        let CurrentUserID = this.props.match.params.userID;
        if (!CurrentUserID) {
            CurrentUserID = this.props.AuthLogin;
        }
 
        this.props.getStatus(CurrentUserID)

        ProfileAPI.CurrentProfile(CurrentUserID).then(response => {this.props.SetUserProfile(response)})
    }
    render() {

        return(<Profile ProfileAboutMe={this.props.ProfileAboutMe} 
            ProfileSmallPhoto={this.props.ProfileSmallPhoto}
            ProfileFullName = {this.props.ProfileFullName}
            Status = {this.props.status}
            updateStatus = {this.props.updateStatus}
            isAuth = {this.props.isAuth}
            />)
        }
}

let mapStateToProps = (state) => ({
    ProfileAboutMe: state.Profile_page.Profile.aboutMe,
    ProfileSmallPhoto : state.Profile_page.Profile.photos.small,
    ProfileFullName : state.Profile_page.Profile.fullName,
    status : state.Profile_page.status,
    isAuth : state.Auth.isAuth,
    AuthLogin : state.Auth.userId
})

export default compose(
    connect(mapStateToProps, {SetUserProfile, getStatus, updateStatus}),
    withRouter   
)
(Profile_ContainerAPI)


