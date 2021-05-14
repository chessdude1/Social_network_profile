import { connect } from "react-redux"
import {getUsersAPIthunkCreator, ChangeCurrentPage, Follow, isFetchingSwitch, SetUsers, UnFollow, followingInProgressSwitch, followAPIthunkCreator, unfollowAPIthunkCreator } from "../../redux/Contacts_messages_reducer"
import Contacts_messagesC from './Contacts_messagesC'
import React from "react";
import Preloader from "../../common/preloader";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { GetFollowingStatus, GetContacts_messages, GetPageSize, GetTotalCount, GetCurrentPage, GetIsFetching, GetAuthStatus, GetUsersFilter } from "../../redux/selectors/Contact_messages_reducer";
import { AppStateType } from "../../redux/redux-store";

type Contacts_messages_type = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
  isFetchingSwitch : (isFetchingStatus : boolean) => void
  SetUsers : (users : any) => void
  unfollowAPIthunkCreator : (userId : number) => void
  UnFollow : (userId : number) => void
  followingInProgressSwitch : (followingStatus : boolean, userId : number) => void
  followAPIthunkCreator : (userId : number) => void
  Follow : (userId : number) => void
  ChangeCurrentPage : (e : number) => void,
  getUsersAPIthunkCreator : (CurrentPage : number, PageSize : number, name: string, friend ?: string) => void,
}

type MapStatePropsType = {
  CurrentPage : number
  PageSize : number
  isFetching : boolean
  totalCount : number
  Contacts_messages : string
  followingStatus : any
  AuthStatus : boolean
}



class Contacts_messagesAPI extends React.Component<Contacts_messages_type> {
  
    componentDidMount (){
      this.props.getUsersAPIthunkCreator(this.props.CurrentPage, this.props.PageSize, '')
    }
  
    OnPageChanged = (e : number) => {
      this.props.ChangeCurrentPage(e);
      this.props.getUsersAPIthunkCreator(e, this.props.PageSize, '')
    }
    
    OnFilterChanged = (name : string, friend : string) => { //typeof initial_state.filter //
     const {PageSize} = this.props;
     this.props.getUsersAPIthunkCreator(1, PageSize, name, friend)
    }
  
    render() {
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
          OnPageChanged={this.OnPageChanged}
          unfolloww = {this.props.unfollowAPIthunkCreator}
          OnFilterChanged = {this.OnFilterChanged} />
          </>
      }
  }
  

let mapStateToProps = (state : any) : MapStatePropsType => {
    return {
        followingStatus : GetFollowingStatus(state),
        Contacts_messages : GetContacts_messages(state),
        totalCount : GetTotalCount(state),
        PageSize : GetPageSize(state),
        CurrentPage :GetCurrentPage(state),
        isFetching :GetIsFetching(state),
        AuthStatus : GetAuthStatus(state),
        //@ts-ignore
        filter: GetUsersFilter(state)
    }
}

export default compose (
  connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, { Follow, UnFollow, SetUsers, 
    ChangeCurrentPage, isFetchingSwitch, followingInProgressSwitch, getUsersAPIthunkCreator, followAPIthunkCreator, unfollowAPIthunkCreator}),
  withAuthRedirectComponent
)
(Contacts_messagesAPI)

