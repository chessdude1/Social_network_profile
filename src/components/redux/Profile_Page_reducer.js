import { ProfileAPI } from "../../api/api";

const SetUserProfileChange = "SetUserProfileChange";
const SetStatus ="SetStatus";
const SavePhotos = "SavePhotos";

let initial_state = {
  Profile: {photos : 
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
  debugger
  let response = await(ProfileAPI.savePhotoAPI(photo))
    if (response.data.resultCode == 0) {
      dispatch(SavePhotoSuccess(response.data.data.photos))
    }
}


