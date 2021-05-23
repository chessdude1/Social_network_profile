import { getAuthUserDataThunkCreator } from "./auth_reducer";
import {InferActionsTypes, BaseThunkType} from './redux-store'
const InitializedSuccess = "InitializedSuccess";

type InitialType = {
  initialStatus : boolean
}

let initial_state : InitialType = {
  initialStatus : false
};

type initial_state_type = typeof initial_state

export const AppReducer = (state: initial_state_type   = initial_state, action: ActionsType) : initial_state_type  => {
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


type ActionsType = InferActionsTypes<typeof actions_app_Reducer>
type ThunkType = BaseThunkType<ActionsType>

let actions_app_Reducer = {
  InitializedSwitch : () => ({type: InitializedSuccess})
}

export const initializedApp = () : ThunkType => async(dispatch) => {
  let promise = dispatch(getAuthUserDataThunkCreator())
  promise.then (() => {
    dispatch(actions_app_Reducer.InitializedSwitch())
  })
}