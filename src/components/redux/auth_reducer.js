const SetAuthData = 'SetAuthData';


let initial_state = {
   userId : null,
   email : null,
   login: null,
   isAuth: false
};

export const Auth_reducer = (state = initial_state, action) => {
  switch (action.type) {
      case SetAuthData:
          return {
              ...state,
              ...action.data,
              isAuth: true,
 
          }
        default: 
        return state;
    
  }
};

export const SetAuthUserData = (userId, email, login) => ({ type: SetAuthData, data: {userId, email, login} });

