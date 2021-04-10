const SetAuthData = 'SetAuthData';


let initial_state = {
    UserData: {},
    LoginStatus : false
};

export const Auth_reducer = (state = initial_state, action) => {
  switch (action.type) {
      case SetAuthData:
          return {
              ...state,
              UserData : action.AuthUserData,
              LoginStatus : true // переделать авторизацию //
          }
        default: 
        return state;
    
  }
};

export const SetUserData = (AuthUserData) => ({ type: SetAuthData, AuthUserData });

