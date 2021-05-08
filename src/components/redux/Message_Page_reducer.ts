const AddMassage = "AddMassage";
const Change_MessageText = "Change_MessageText";
const DeleteMessage = "DeleteMessage";


type Messages_fromPersons_Data_type = {
  name : string;
  message : string;
  id : string
}
let initial_state = {
  Messages_fromPersons_Data: [
    { name: "Dima", message: "Hello", id: "1" },
    { name: "Valera", message: "Bye", id: "2" },
    { name: "Sonya", message: "How are you", id: "3" },
  ] as Array<Messages_fromPersons_Data_type>,

  Messages_Contacts_Data: [
    { name: "Dima", message: "Hello", id: "1" },
    { name: "Valera", message: "Bye", id: "2" },
    { name: "Sonya", message: "How are you", id: "3" },
  ] as Array<Messages_fromPersons_Data_type>,

  MessageText: "Hello I work!" as string,
}

export type initial_state_Messages_reducer = typeof initial_state;

const Messages_reducer = (state = initial_state, action: any) : initial_state_Messages_reducer => {
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
      case DeleteMessage :
        return {
          ...state
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


export type ActionCreatorReturnText_type = {
  type : typeof AddMassage
}

export type ActionDeleteMessage_type = {
  type : typeof DeleteMessage 
}

export type ActionCreatorChangeText_type = {
  type : typeof Change_MessageText,
  CurrentText : string
}
export const ActionCreatorReturnText = () : ActionCreatorReturnText_type => {
  return { type: AddMassage };
};

export const ActionDeleteMessage = () :  ActionDeleteMessage_type => {
  return { type: DeleteMessage };
};

export const ActionCreatorChangeText = (text : string) : ActionCreatorChangeText_type => {
  return { type: Change_MessageText, CurrentText: text };
};

export default Messages_reducer;
