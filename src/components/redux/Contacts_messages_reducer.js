import axios from "axios";
import { ContactsAPI } from "../../api/api";
import { updateObjectInArray } from "../../utilites/object-helpers";


const UnFollow_change = 'UnFollow_change';
const Follow_change = 'Follow_change';
const Set_users = 'Set_users';
const Change_CurrentPage = 'Change_CurrentPage';
const isFetchingSwitch_type ='isFetchingSwitch_type';
const followingInProgress_type ='followingInProgress_type';

let initial_state = {
  users: [],
  totalCount : 45,
  PageSize: 5,
  CurrentPage: 8,
  isFetching : false,
  followingInProgress : []
};

export const Contacts_messages_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case isFetchingSwitch_type:
      return {...state,
      isFetching : action.isFetchingStatus}
    case Change_CurrentPage:
      return { ...state, CurrentPage: action.CurrentPage}
    case Set_users:
      return { ...state, users: [...action.users]
      }
    case Follow_change:
      return {
        ...state,
        users : updateObjectInArray(state.users, action.userId, 'id', {followed : true})
      };
    case UnFollow_change:
      return {
        ...state,
        users : updateObjectInArray(state.users, action.userId, 'id', {followed : false})
        // users: state.users.map(u => {
        //   if (u.id == action.userId) {
        //     return { ...u, followed : false };
        //   }
        //   return u
        // }),
      };
    case followingInProgress_type:
      return {
        ...state,
        followingInProgress : action.followingStatus ? 
        [...state.followingInProgress, action.userId] :
        state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
};

export const Follow = (userId) => ({ type: Follow_change, userId });
export const UnFollow = (userId) => ({ type: UnFollow_change, userId });
export const SetUsers = (users) => ({type: Set_users, users});
export const ChangeCurrentPage = (CurrentPage) => ({type: Change_CurrentPage, CurrentPage});
export const isFetchingSwitch = (isFetchingStatus) => ({type: isFetchingSwitch_type, isFetchingStatus });
export const followingInProgressSwitch = (followingStatus, userId) => ({type: followingInProgress_type, followingStatus, userId })


const followUnfollowSwitch = async (dispatch, userID, APImethod, actionCreator ) => {
  dispatch(followingInProgressSwitch(true, userID));
    let response = await(APImethod(userID));
     if (response.data.resultCode == 0) {
     dispatch(actionCreator)
     dispatch(followingInProgressSwitch(false, userID));
     }
  }

export const followAPIthunkCreator = (userID) => {
  return async (dispatch) => {
    let APImethod = ContactsAPI.unfollow.bind(ContactsAPI);
    let actionCreator = UnFollow(userID);
    followUnfollowSwitch(dispatch, userID, APImethod, actionCreator)
   }
  }

export const unfollowAPIthunkCreator = (userID) => {
  return async (dispatch) => {
    let APImethod = ContactsAPI.follow.bind(ContactsAPI)
    let actionCreator = Follow(userID);
    followUnfollowSwitch(dispatch, userID, APImethod, actionCreator)
  }
}

export const getUsersAPIthunkCreator = (CurrentPage, PageSize) => {
  return async(dispatch) => {
      dispatch(isFetchingSwitch(true));
      let response = await(ContactsAPI.getUsers(CurrentPage, PageSize));
      dispatch(SetUsers(response));
      dispatch(isFetchingSwitch(false))
      }
};


