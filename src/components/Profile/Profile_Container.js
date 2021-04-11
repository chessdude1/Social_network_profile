import React from "react";
import Profile from './Profile'
import axios from "axios";
import { connect } from "react-redux";
import {SetUserProfile} from '../redux/Profile_Page_reducer'
import { withRouter } from "react-router";

class Profile_ContainerAPI extends React.Component {
    componentDidMount() {
        let CurrentUserID = this.props.match.params.userID;
        if (!CurrentUserID) {
            CurrentUserID = 16412;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + CurrentUserID).then(response => {
            this.props.SetUserProfile(response.data)
        })
    }
    render() {

        return(<Profile ProfileAboutMe={this.props.ProfileAboutMe} 
            ProfileSmallPhoto={this.props.ProfileSmallPhoto}
            ProfileFullName = {this.props.ProfileFullName}/>)
        }
}

let mapStateToProps = (state) => ({
    ProfileAboutMe: state.Profile_page.Profile.aboutMe,
    ProfileSmallPhoto : state.Profile_page.Profile.photos.small,
    ProfileFullName : state.Profile_page.Profile.fullName
})


let WithURLDataContainerComponent = withRouter(Profile_ContainerAPI);

let Profile_Container = connect(mapStateToProps, {SetUserProfile})(WithURLDataContainerComponent)

export default Profile_Container;