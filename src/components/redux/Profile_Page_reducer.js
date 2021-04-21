import { ProfileAPI } from "../../api/api";

const SetUserProfileChange = "SetUserProfileChange";
const SetStatus ="SetStatus";

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


