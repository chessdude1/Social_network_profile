import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "../../api/api";

const SetAuthData = 'auth_reducer/SetAuthData';
const GetCaptchaUrlSuccess = 'GetCaptchaUrlSuccess'

let initial_state = {
   userId : null,
   email : null,
   login: null,
   isAuth: false,
   captchaUrl: null 
};

export const Auth_reducer = (state = initial_state, action) => {
  switch (action.type) {
      case GetCaptchaUrlSuccess:
      case SetAuthData:
        debugger
          return {
              ...state,
              ...action.data,
 
          }
        default: 
        return state;
    
  }
};

export const SetAuthUserData = (userId, email, login, isAuth) => ({ type: SetAuthData, data: {userId, email, login, isAuth} });
export const CaptchaURLSuccess = (captchaUrl) => ({ type: GetCaptchaUrlSuccess, data: {captchaUrl} });

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    let response = await AuthAPI.getLoginData();    
     if (response.data.resultCode == 0) {
     let {id, login, email} = response.data.data
    dispatch(SetAuthUserData(id, login, email, true))
   }
}

export const LoginThunkCreator = (id, login, email, captcha) => {
  return (dispatch) => {
    AuthAPI.login(id, login, email, captcha).then(response => {
      if (response.data.resultCode == 0) {
        dispatch(getAuthUserDataThunkCreator())
      }
      else if (response.data.resultCode == 10) {
        dispatch(getCaptchaURL())
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

export const getCaptchaURL = () => async (dispatch) => {
  debugger
  const response = await(SecurityAPI.getCaptchaUrl());
  const captchaUrl = response.data.url;
  dispatch(CaptchaURLSuccess(captchaUrl))
}


