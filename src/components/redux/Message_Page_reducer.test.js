



const initial_state = {
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

// it ('new post should be added', () => {
//     expect (true).toBe(true)
// })

it ('Delete message' , () => {
  let action = ActionDeleteMessage()

  let newState = Messages_reducer(initial_state, action);

  expect(newState.Messages_fromPersons_Data.length).toBe(1)
})

import {ActionDeleteMessage} from "./Message_Page_reducer";
import Messages_reducer from "./Message_Page_reducer"



 
