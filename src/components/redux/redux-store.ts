import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import Messages_reducer from "./Message_Page_reducer";
import Experience_post_reducer from "./Experience_post_reducer";
import {Contacts_messages_reducer} from "./Contacts_messages_reducer";
import {Profile_reducer} from './Profile_Page_reducer'
import { Auth_reducer } from "./auth_reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { AppReducer } from "./app_reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    Messages_page:   Messages_reducer,
    Experience_post:  Experience_post_reducer,
    Contacts_messages: Contacts_messages_reducer,
    Profile_page: Profile_reducer,
    Auth : Auth_reducer,
    App : AppReducer, 
    form : formReducer
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ))


type actionsType<T> = T extends {[key:string] : infer U} ? U : never

export type InferActionsTypes<T extends {[key:string] : (...args: any[]) => any}> = ReturnType<actionsType<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

type RootReducer = typeof reducers;
export type AppStateType = ReturnType<RootReducer>;

export default store;
//@ts-ignore
window.store = store;




