import { ProfileAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SetUserProfileChange = "SetUserProfileChange";
const SetStatus ="SetStatus";
const SavePhotos = "SavePhotos";


let initial_state = {
  Profile: {contacts : {
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
    {ProfileSmallPhoto : "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"}},
    status : '---'
};

export const Profile_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case SetUserProfileChange:
      return {
        ...state,
        Profile: action.profileData,
      };
      case SavePhotos:
        return {...state, profile : {...state.profile, photos: action.photo}}
    case SetStatus:
      return {
        ...state,
        status : action.status
      }
    default:
      return state;
  }
};

export const SetUserProfile = (profileData) => ({type: SetUserProfileChange, profileData})
export const SetUserStatus = (status) => ({type: SetStatus, status})
export const SavePhotoSuccess = (photo) => ({type: SavePhotos, photo})


export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getUserStatus(userId).then(response => {
    dispatch(SetUserStatus(response.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode == 0) {
      dispatch(SetUserStatus(status))
    }
  })
}

export const SavePhoto = (photo) => async(dispatch) => {
  let response = await(ProfileAPI.savePhotoAPI(photo))
    if (response.data.resultCode == 0) {
      dispatch(SavePhotoSuccess(response.data.data.photos))
    }
}
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await(ProfileAPI.CurrentProfile(userId));
  dispatch(SetUserProfile(response))
}

export const SaveProfile = (profile) => async(dispatch, getState) => {
  const userId = getState().Auth.userId 
  let response = await(ProfileAPI.SaveProfiles(profile))
    if (response.data.resultCode == 0) {
      dispatch(getUserProfile(userId))
    }
    else {   
      dispatch(stopSubmit ('edit-profile', {_error: response.data.messages[0]}))
    }
}



