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
  CurrentPage: 1,
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
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return { ...u, followed: true };
          }
          return u
        }),
      };
    case UnFollow_change:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return { ...u, followed : false };
          }
          return u
        }),
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
