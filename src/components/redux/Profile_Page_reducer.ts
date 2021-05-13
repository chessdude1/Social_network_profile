import { ProfileAPI, ResultCodesEnum } from "../../api/api";
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

const SetUserProfileChange = "SetUserProfileChange";
const SetStatus ="SetStatus";
const SavePhotos = "SavePhotos";


let initial_state = {
  Profile: {
    fullName : '',
    aboutMe : '',
      contacts : {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null
  },
    photos :   
      { 
        small : '',
        ProfileSmallPhoto : "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"}
          },
    status : '---'
};

export type initial_state_Profile_reducer = typeof initial_state

export const Profile_reducer = (state = initial_state, action : actionsTypes) : initial_state_Profile_reducer => {
  switch (action.type) {
    case SetUserProfileChange:
      return {
        ...state,
        //@ts-ignore
        Profile: action.profileData,
      };
      case SavePhotos:
        //@ts-ignore
        return {...state, Profile : {...state.Profile, photos: action.photo}}
    case SetStatus:
      return {
        ...state,
        //@ts-ignore
        status : action.status
      }
    default:
      return state;
  }
};

type actionsTypes = InferActionsTypes<typeof actions_Profile_Page_reducer>

const actions_Profile_Page_reducer = {
  SetUserProfile : (profileData : any) => ({type: SetUserProfileChange, profileData}),
  SetUserStatus : (status : any) => ({type: SetStatus, status}),
  SavePhotoSuccess : (photo : any) => ({type: SavePhotos, photo})
}

export const SetUserProfile = (profileData : any) => ({type: SetUserProfileChange, profileData})
export const SetUserStatus = (status : any) => ({type: SetStatus, status})
export const SavePhotoSuccess = (photo : object) => ({type: SavePhotos, photo})


export const getStatus = (userId : number) => (dispatch : any) => {
  ProfileAPI.getUserStatus(userId).then(response => {
    dispatch(SetUserStatus(response.data))
  })
}

export const updateStatus = (status : string) => (dispatch : any) => {
  ProfileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode == ResultCodesEnum.Success) {
      dispatch(SetUserStatus(status))
    }
  })
}

export const SavePhoto = (photo : any) => async(dispatch : any) => {
  let response = await(ProfileAPI.savePhotoAPI(photo))
    if (response.data.resultCode == ResultCodesEnum.Success) {
      dispatch(SavePhotoSuccess(response.data.data.photos))
    }
}
export const getUserProfile = (userId : number) => async (dispatch : any) => {
  const response = await(ProfileAPI.CurrentProfile(userId));
  dispatch(SetUserProfile(response))
}

export const SaveProfile = (profile : any) => async(dispatch : any, getState : any) => {
  const userId = getState().Auth.userId 
  let response = await(ProfileAPI.SaveProfiles(profile))
    if (response.data.resultCode == ResultCodesEnum.Success) {
      dispatch(getUserProfile(userId))
    }
    else {   
      dispatch(stopSubmit ('edit-profile', {_error: response.data.messages[0]}))
    }
}



