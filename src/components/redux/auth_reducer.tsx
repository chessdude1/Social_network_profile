import { stopSubmit } from "redux-form";
import { AuthAPI, ResultCodesEnum, ResultCodesEnumForCaptcha, SecurityAPI } from "../../api/api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

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
type state_auth_reducer = typeof initial_state

export const Auth_reducer = (state : initial_state_auth_reducer  = initial_state, action : actionsTypes) : state_auth_reducer  => {
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

type actionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<actionsTypes>


export const actions = {
       SetAuthUserData : (userId : number , email : string , login : string  , isAuth : boolean )  => ({ type: SetAuthData, data: {userId, email, login, isAuth} }),
       CaptchaURLSuccess : (captchaUrl : any) => ({ type: GetCaptchaUrlSuccess, data: {captchaUrl} })
}

export const SetAuthUserData = (userId : number , email : string , login : string  , isAuth : boolean )  => ({ type: SetAuthData, data: {userId, email, login, isAuth} });
export const CaptchaURLSuccess = (captchaUrl : any) => ({ type: GetCaptchaUrlSuccess, data: {captchaUrl} })

export const getAuthUserDataThunkCreator = () : ThunkType => async (dispatch) => {
    let response = await AuthAPI.getLoginData();    
     if (response.resultCode == ResultCodesEnum.Success) {
     let {id, login, email} = response.data
    dispatch(actions.SetAuthUserData(id, login, email, true))
   }
}

export const LoginThunkCreator = (id : number, login : string, email : boolean, captcha : string)  => {
  return (dispatch : any) => {
    AuthAPI.login(id, login, email, captcha).then(response => {
      if (response.data.resultCode == 0) {
        dispatch(getAuthUserDataThunkCreator())
      }
      else if (response.data.resultCode == ResultCodesEnumForCaptcha.CaptchaIsRequired) {
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
        dispatch(actions.SetAuthUserData(0, 'none', 'none', false))
      }
     })
  }
}

export const getCaptchaURL = () : ThunkType => async (dispatch) => {
  const response = await(SecurityAPI.getCaptchaUrl());
  const captchaUrl = response.data.url;
  dispatch(actions.CaptchaURLSuccess(captchaUrl))
}


