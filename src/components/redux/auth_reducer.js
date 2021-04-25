import { stopSubmit } from "redux-form";
import { AuthAPI } from "../../api/api";

const SetAuthData = 'auth_reducer/SetAuthData';


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
 
          }
        default: 
        return state;
    
  }
};

export const SetAuthUserData = (userId, email, login, isAuth) => ({ type: SetAuthData, data: {userId, email, login, isAuth} });

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    let response = await AuthAPI.getLoginData();    
     if (response.data.resultCode == 0) {
     let {id, login, email} = response.data.data
    dispatch(SetAuthUserData(id, login, email, true))
   }
}

export const LoginThunkCreator = (id, login, email) => {
  return (dispatch) => {
    AuthAPI.login(id, login, email).then(response => {
      if (response.data.resultCode == 0) {
        dispatch(getAuthUserDataThunkCreator())
      }
      else     
      dispatch(stopSubmit ('login', {_error: response.data.messages[0]}))
    })
  }
}

export const LogoutThunkCreator = () => {
  return (dispatch) => {
    AuthAPI.logOut().then ( response => {
      if (response.data.resultCode == 0) {
        dispatch(SetAuthUserData(null, null, null, false))
      }
     })
  }
}

