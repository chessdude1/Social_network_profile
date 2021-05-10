import axios from "axios";
import { ContactsAPI, ResultCodesEnum } from "../../api/api";
import { updateObjectInArray } from "../../utilites/object-helpers";


const UnFollow_change = 'UnFollow_change';
const Follow_change = 'Follow_change';
const Set_users = 'Set_users';
const Change_CurrentPage = 'Change_CurrentPage';
const isFetchingSwitch_type ='isFetchingSwitch_type';
const followingInProgress_type ='followingInProgress_type';

type followingInProgressType = {
  id : number
}

let initial_state = {
  users: [] as any,
  totalCount : 45 as number,
  PageSize: 5 as number,
  CurrentPage: 8 as number,
  isFetching : false as boolean,
  followingInProgress : [] as Array<followingInProgressType>,
};

export type initial_state_type = typeof initial_state;

export const Contacts_messages_reducer = (state = initial_state, action : any) : initial_state_type => {
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

export type Follow_type = {
  type : typeof Follow_change;
  userId : number
}

export type UnFollow_type = {
  type : typeof UnFollow_change;
  userId : number
}

export type SetUsers_type = {
  type : typeof Set_users;
  users : number
}

export type ChangeCurrentPage_type = {
  type : typeof Change_CurrentPage;
  CurrentPage : number
}

export type isFetchingSwitch_type = {
  type : typeof isFetchingSwitch_type;
  isFetchingStatus : boolean
}

export type followingInProgressSwitch = {
  type : typeof followingInProgress_type;
  followingStatus : boolean;
  userId : number
}

export const Follow = (userId : number) : Follow_type => ({ type: Follow_change, userId});
export const UnFollow = (userId  : number) : UnFollow_type => ({ type: UnFollow_change, userId });
export const SetUsers = (users  : number) : SetUsers_type => ({type: Set_users, users});
export const ChangeCurrentPage = (CurrentPage  : number) : ChangeCurrentPage_type => ({type: Change_CurrentPage, CurrentPage});
export const isFetchingSwitch = (isFetchingStatus  : boolean) : isFetchingSwitch_type => ({type: isFetchingSwitch_type, isFetchingStatus });
export const followingInProgressSwitch = (followingStatus : boolean, userId : number) : followingInProgressSwitch => ({type: followingInProgress_type, followingStatus, userId })


const followUnfollowSwitch = async (dispatch : any, userID: number, APImethod : any, actionCreator : any ) => {
  dispatch(followingInProgressSwitch(true, userID));
    let response = await(APImethod(userID));
     if (response.data.resultCode == ResultCodesEnum.Success) {
     dispatch(actionCreator)
     dispatch(followingInProgressSwitch(false, userID));
     }
  }

export const followAPIthunkCreator = (userID : number) => {
  return async (dispatch : any) => {
    let APImethod = ContactsAPI.unfollow.bind(ContactsAPI);
    let actionCreator = UnFollow(userID);
    followUnfollowSwitch(dispatch, userID, APImethod, actionCreator)
   }
  }

export const unfollowAPIthunkCreator = (userID : number) => {
  return async (dispatch : any) => {
    let APImethod = ContactsAPI.follow.bind(ContactsAPI)
    let actionCreator = Follow(userID);
    followUnfollowSwitch(dispatch, userID, APImethod, actionCreator)
  }
}

export const getUsersAPIthunkCreator = (CurrentPage : number, PageSize : number) => {
  return async(dispatch : any) => {
      dispatch(isFetchingSwitch(true));
      let response = await(ContactsAPI.getUsers(CurrentPage, PageSize));
      dispatch(SetUsers(response));
      dispatch(isFetchingSwitch(false))
      }
};

