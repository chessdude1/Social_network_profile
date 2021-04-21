import { getAuthUserDataThunkCreator } from "./auth_reducer";

const InitializedSuccess = "InitializedSuccess"

let initial_state = {
  initialStatus : false
};

export const AppReducer = (state = initial_state, action) => {
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

export const InitializedSwitch = () => ({type: InitializedSuccess})

export const initializedApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThunkCreator())
  debugger
  promise.then (() => {
    dispatch(InitializedSwitch())
  })
}