import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "../../api/api";

const SetAuthData = 'auth_reducer/SetAuthData';
const GetCaptchaUrlSuccess = 'GetCaptchaUrlSuccess'

export type initial_state_auth_reducer = {
  userId : null | number,
  email : string | null,
  login : string | null,
  isAuth : boolean,
  captchaUrl : string | null,
}
let initial_state: initial_state_auth_reducer = {
   userId : null,
   email : null,
   login: null,
   isAuth: false,
   captchaUrl: null 
};

export const Auth_reducer = (state : initial_state_auth_reducer  = initial_state, action : any) : initial_state_auth_reducer  => {
  switch (action.type) {
      case GetCaptchaUrlSuccess:
      case SetAuthData:
          return {
              ...state,
              ...action.data, 
          }
        default: 
        return state;
    
  }
};

export type SetAuthUserDataType = {
    type: typeof SetAuthData,
    data : {
      userId : number;
      email : string ;
      login : string ;
      isAuth : boolean ;
    }
}

export const SetAuthUserData = (userId : number , email : string , login : string  , isAuth : boolean ) : SetAuthUserDataType => ({ type: SetAuthData, data: {userId, email, login, isAuth} });
export const CaptchaURLSuccess = (captchaUrl : any) => ({ type: GetCaptchaUrlSuccess, data: {captchaUrl} });

export const getAuthUserDataThunkCreator = () => async (dispatch : any) => {
    let response = await AuthAPI.getLoginData();    
     if (response.data.resultCode == 0) {
     let {id, login, email} = response.data.data
    dispatch(SetAuthUserData(id, login, email, true))
   }
}

export const LoginThunkCreator = (id : number, login : string, email : boolean, captcha : string) => {
  return (dispatch : any) => {
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
  return (dispatch : any) => {
    AuthAPI.logOut().then ( response => {
      if (response.data.resultCode == 0) {
        dispatch(SetAuthUserData(0, 'none', 'none', false))
      }
     })
  }
}

export const getCaptchaURL = () => async (dispatch : any) => {
  debugger
  const response = await(SecurityAPI.getCaptchaUrl());
  const captchaUrl = response.data.url;
  dispatch(CaptchaURLSuccess(captchaUrl))
}


