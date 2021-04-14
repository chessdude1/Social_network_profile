import React from "react";
import Profile from './Profile'
import axios from "axios";
import { connect } from "react-redux";
import {SetUserProfile} from '../redux/Profile_Page_reducer'
import { withRouter } from "react-router";
import {ProfileAPI} from '../../api/api'
import { compose } from "redux";

class Profile_ContainerAPI extends React.Component {
    componentDidMount() {
        let CurrentUserID = this.props.match.params.userID;
        if (!CurrentUserID) {
            CurrentUserID = 16412;
        }

        ProfileAPI.CurrentProfile(CurrentUserID).then(response => {this.props.SetUserProfile(response)})
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

export default compose(
    connect(mapStateToProps, {SetUserProfile}),
    withRouter   
)
(Profile_ContainerAPI)

// let WithURLDataContainerComponent = withRouter(Profile_ContainerAPI);

// let Profile_Container = connect(mapStateToProps, {SetUserProfile})(WithURLDataContainerComponent)

// export default Profile_Container;

