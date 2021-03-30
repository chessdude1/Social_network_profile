const AddMassage = "AddMassage";
const Change_MessageText = "Change_MessageText";

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
      // let state_copy = {...state};
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
  
      // state_copy.Messages_fromPersons_Data.push(newPost);
      // state_copy.MessageText = " ";
        // return state_copy
      case Change_MessageText :
        // let state_cop_2 = {...state}
        // state_cop_2.MessageText = action.CurrentText;
        // return state_cop_2
        return {
          ...state,
          MessageText : action.CurrentText,
        }
      default : 
      return state

  } 


};

export default Messages_reducer;
