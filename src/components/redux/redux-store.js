import { combineReducers, createStore } from "redux";
import Messages_reducer from "./Message_Page_reducer";
import Experience_post_reducer from "./Experience_post_reducer";

let reducers = combineReducers({
    Messages_page:   Messages_reducer,
    Experience_post:  Experience_post_reducer,
});

let store = createStore(reducers);

export default store;