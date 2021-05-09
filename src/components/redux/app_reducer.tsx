import { getAuthUserDataThunkCreator } from "./auth_reducer";

const InitializedSuccess = "InitializedSuccess";

export type InitialType = {
  initialStatus : boolean
}

let initial_state : InitialType = {
  initialStatus : false
};

export const AppReducer = (state: InitialType = initial_state, action: any) : InitialType => {
  switch (action.type) {
    case InitializedSuccess:
      return {
        ...state,
        initialStatus: true,
      };
    default:
      return state;
  }
};

export type InitializedSwitchType = {
  type : typeof InitializedSuccess 
}
export const InitializedSwitch = () : InitializedSwitchType  => ({type: InitializedSuccess})

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserDataThunkCreator())
  promise.then (() => {
    dispatch(InitializedSwitch())
  })
}