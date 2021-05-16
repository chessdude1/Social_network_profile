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

const Contact_messages_container = () => {
  return ( <div>
  <Contacts_messagesC />
  </div>
  )
}

export default Contact_messages_container
