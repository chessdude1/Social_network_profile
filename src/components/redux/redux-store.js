import { combineReducers, createStore } from "redux";
import Messages_reducer from "./Message_Page_reducer";
import Experience_post_reducer from "./Experience_post_reducer";
import {Contacts_messages_reducer} from "./Contacts_messages_reducer";
import {Profile_reducer} from './Profile_Page_reducer'
import { Auth_reducer } from "./auth_reducer";


let reducers = combineReducers({
    Messages_page:   Messages_reducer,
    Experience_post:  Experience_post_reducer,
    Contacts_messages: Contacts_messages_reducer,
    Profile_page: Profile_reducer,
    Auth : Auth_reducer
});

let store = createStore(reducers);

export default store;
window.store = store;