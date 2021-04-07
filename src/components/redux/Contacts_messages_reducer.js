const UnFollow = 'UnFollow';
const Follow = 'Follow';
const Set_users = 'Set_users';

let initial_state = {
  users: [  ],
};

export const Contacts_messages_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case Set_users:
      return { ...state, users: [...action.users]
      }
    case Follow:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return { ...u, followed: false };
          }
          return u
        }),
      };
    case UnFollow:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return { ...u, followed : true };
          }
          return u
        }),
      };
    default:
      return state;
  }
};

export const FollowAC = (userId) => ({ type: Follow, userId });
export const UnFollowAc = (userId) => ({ type: UnFollow, userId });
export const setUsersAc = (users) => ({type: Set_users, users})
