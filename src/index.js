import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
// import store from './components/redux/state'
import store from "./components/redux/redux-store";
import { Provider } from "react-redux";

window.store = store;
// let rerenderEntiteTree = (state) => {

let state = (store.getState())
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
// };
// AddMassage={store.AddMassage.bind(store)} Change_MessageText={store.Change_MessageText.bind(store)}
// rerenderEntiteTree(store.getState());

// // store.Hold(rerenderEntiteTree)

// store.subscribe(() => {
//   //store subscribe Это store.Hold
//   rerenderEntiteTree(store.getState());
// });

reportWebVitals();
