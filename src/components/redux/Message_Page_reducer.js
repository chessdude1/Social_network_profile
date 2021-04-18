const AddMassage = "AddMassage";
const Change_MessageText = "Change_MessageText";
const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";


let initial_state = {
  Messages_fromPersons_Data: [
    { name: "Dima", message: "Hello", id: "1" },
    { name: "Valera", message: "Bye", id: "2" },
    { name: "Sonya", message: "How are you", id: "3" },
  ],

  Messages_Contacts_Data: [
    { name: "Dima", message: "Hello", id: "1" },
    { name: "Valera", message: "Bye", id: "2" },
    { name: "Sonya", message: "How are you", id: "3" },
  ],

  MessageText: "Hello I work!",
}


const Messages_reducer = (state = initial_state, action) => {
  switch (action.type) {
      case AddMassage : 
      let newPost = {
        name: "Lola",
        message: state.MessageText,
        id: "5",
      };

      return {
        ...state,
        Messages_fromPersons_Data: [...state.Messages_fromPersons_Data, newPost],
        MessageText : ' ',
      }
      case Change_MessageText :
        return {
          ...state,
          MessageText : action.CurrentText,
        }
      default : 
      return state

  } 


};

export const ActionCreatorReturnText = () => {
  return { type: AddMassage };
};

export const ActionCreatorChangeText = (text) => {
  return { type: Change_MessageText, CurrentText: text };
};

export default Messages_reducer;
