import {InferActionsTypes } from "./redux-store";

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

const Messages_reducer = (state = initial_state, action: actionsTypes) : initial_state_Messages_reducer => {
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
          //@ts-ignore
          MessageText : action.CurrentText,
        }
      default : 
      return state
  } 
};

type actionsTypes = InferActionsTypes<typeof  actions_Message_Page_reducer>

const actions_Message_Page_reducer = {
  ActionCreatorReturnText : ()  => {
    return { type: AddMassage };
  },
  
  ActionDeleteMessage : ()  => {
    return { type: DeleteMessage };
  },
  
  ActionCreatorChangeText : (text : string)  => {
    return { type: Change_MessageText, CurrentText: text };
  },
}


export const ActionCreatorReturnText = () : actionsTypes => {
  return { type: AddMassage };
};

export const ActionDeleteMessage = () :  actionsTypes => {
  return { type: DeleteMessage };
};

export const ActionCreatorChangeText = (text : string) : actionsTypes => {
  return { type: Change_MessageText, CurrentText: text };
};

export default Messages_reducer;
