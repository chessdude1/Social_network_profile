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
      let newPost = {
        name: "Lola",
        message: state.MessageText,
        id: "5",
      };
  
      state.Messages_fromPersons_Data.push(newPost);
      state.MessageText = " ";
        return state
      case Change_MessageText : 
      state.MessageText = action.CurrentText;
        return state
      default : 
      return state

  } 


};

export default Messages_reducer;
