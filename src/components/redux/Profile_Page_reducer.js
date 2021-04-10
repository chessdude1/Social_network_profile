const SetUserProfileChange = "SetUserProfileChange";

let initial_state = {
  Profile: {photos : 
    {ProfileSmallPhoto : "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"}}
};

export const Profile_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case SetUserProfileChange:
      return {
        ...state,
        Profile: action.profileData,
      };
    default:
      return state;
  }
};

export const SetUserProfile = (profileData) => ({type: SetUserProfileChange, profileData})

