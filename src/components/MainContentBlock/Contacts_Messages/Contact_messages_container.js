import { connect } from "react-redux"
import {getUsersAPIthunkCreator, ChangeCurrentPage, Follow, isFetchingSwitch, SetUsers, UnFollow, followingInProgressSwitch, followAPIthunkCreator } from "../../redux/Contacts_messages_reducer"
import Contacts_messagesC from './Contacts_messagesC'
import React from "react";
import Preloader from "../../common/preloader";
import { Redirect } from 'react-router-dom';
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { GetFollowingStatus, GetContacts_messages, GetPageSize, GetTotalCount, GetCurrentPage, GetIsFetching, GetAuthStatus } from "../../redux/selectors/Contact_messages_reducer";



class Contacts_messagesAPI extends React.Component {
    constructor(props) {  
      super(props);
    }
  
    componentDidMount (){
      this.props.getUsersAPIthunkCreator(this.props.CurrentPage, this.props.PageSize)
    }
  
    OnPageChanged = (e) => {
      this.props.ChangeCurrentPage(e);
      this.props.getUsersAPIthunkCreator(e, this.props.PageSize)
    } 
  
    render() {
      if (!this.props.AuthStatus) {
        return (<Redirect to={'/Login'}/>)
      }
      return<>
      {this.props.isFetching ? <Preloader/>: <p>I work</p>}
      <Contacts_messagesC totalCount={this.props.totalCount} 
          PageSize={this.props.PageSize}
          CurrentPage={this.props.CurrentPage}
          Contacts_messages={this.props.Contacts_messages}
          Follow={this.props.Follow}
          followingStatus={this.props.followingStatus}
          UnFollow={this.props.UnFollow}
          followingInProgressSwitch={this.props.followingInProgressSwitch}
          follow={this.props.followAPIthunkCreator}
          AuthStatus={this.props.AuthStatus}
          OnPageChanged={this.OnPageChanged} />
          </>
      }
  }
  

let mapStateToProps = (state) => {
    return {
        followingStatus : GetFollowingStatus(state),
        Contacts_messages : GetContacts_messages(state),
        totalCount : GetTotalCount(state),
        PageSize : GetPageSize(state),
        CurrentPage :GetCurrentPage(state),
        isFetching :GetIsFetching(state),
        AuthStatus : GetAuthStatus(state)
    }
}

export default compose (
  connect(mapStateToProps, { Follow, UnFollow, SetUsers, 
    ChangeCurrentPage, isFetchingSwitch, followingInProgressSwitch, getUsersAPIthunkCreator, followAPIthunkCreator}),
  withAuthRedirectComponent
)
(Contacts_messagesAPI)

