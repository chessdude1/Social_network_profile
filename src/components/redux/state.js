import Messages_reducer from "./Message_Page_reducer";
import Experience_post_reducer from "./Experience_post_reducer";

const AddMassage = "AddMassage";
const Change_MessageText = "Change_MessageText";
const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

 let store = {
//   getState() {
//     return this._state;
//   },
//   _state: {
//     Messages_page: {
//       Messages_fromPersons_Data: [
//         { name: "Dima", message: "Hello", id: "1" },
//         { name: "Valera", message: "Bye", id: "2" },
//         { name: "Sonya", message: "How are you", id: "3" },
//       ],

//       Messages_Contacts_Data: [
//         { name: "Dima", message: "Hello", id: "1" },
//         { name: "Valera", message: "Bye", id: "2" },
//         { name: "Sonya", message: "How are you", id: "3" },
//       ],

//       MessageText: "Hello I work!",
//     },
//     Experience_post: {
//       Experience_post_description: [{ text: "" }],

//       CurrentText: "Hello I work!And i dont stop to do it",
//     },
//   },

//   _rerenderEntiteTree() {
//     console.log("Hello");
//   },

//   Hold(observer) {
//     this._rerenderEntiteTree = observer;
//   },

//   dispatch(action) {
//     this._state.Messages_page = Messages_reducer(
//       this._state.Messages_page,
//       action
//     );
//     this._state.Experience_post = Experience_post_reducer(
//       this._state.Experience_post,
//       action
//     );
//     this._rerenderEntiteTree(this._state);
//   },
 };

export const ActionCreatorReturn_MessageText = () => {
  return { type: AddTextProfilePage };
};

export const ActionCreatorChangeProfilePageText = (textProfilePage) => {
  return {
    type: ChangeProfilePageText,
    CurrentProfilePageText: textProfilePage,
  };
};
export const ActionCreatorReturnText = () => {
  return { type: AddMassage };
};

export const ActionCreatorChangeText = (text) => {
  return { type: Change_MessageText, CurrentText: text };
};

export default store;
