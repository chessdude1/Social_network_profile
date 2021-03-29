import React from "react";
import "./Messages.css";
import Contacts from "./Messages_contacts/Contacts.js";
import Messages_from_person from "./Messages_from_persons/Messages_from_person";
import { ActionCreatorReturnText } from "../../redux/state";
import { ActionCreatorChangeText } from "../../redux/state";

const Messages = (props) => {
  //  let Persons_Data =  props.Messages_fromPersons_Data.map(data => <Contacts name={data.name} id={data.id}/>)
  //  let Contact_messages = props.Messages_Contacts_Data.map(data=> <Messages_from_person name={data.name} message={data.message} id={data.id}/>)
  let AllContactsMessage = props.Messages_Page_Data.Messages_fromPersons_Data.map(
    (data) => (
      <Messages_from_person
        name={data.name}
        message={data.message}
        id={data.id}
      />
    )
  );
  
  let TextFromTextArea = React.createRef();

  // let ReturnText = () => {
  //   props.dispatch(ActionCreatorReturnText());
  // };

  let ReturnText = () => {
    props.Send_text();
  };

  // let Change_Text = () => {
  //   let text = TextFromTextArea.current.value;
  //   props.dispatch(ActionCreatorChangeText(text));
  // };

  let Change_Text = () => {
    let text = TextFromTextArea.current.value;
    props.Change_Text_action(text);
  };

  return (
    <div className="Messages_wrapper">
      <div className="Top_messages">
        <h1>Messages</h1>
      </div>
      <div className="Messages_content_block">
        <div className="Messages_contacts">
          <Contacts
            name={props.Messages_Page_Data.Messages_Contacts_Data[0].name}
            id={props.Messages_Page_Data.Messages_Contacts_Data[0].id}
          />
          <Contacts
            name={props.Messages_Page_Data.Messages_Contacts_Data[1].name}
            id={props.Messages_Page_Data.Messages_Contacts_Data[1].id}
          />
          <Contacts
            name={props.Messages_Page_Data.Messages_Contacts_Data[2].name}
            id={props.Messages_Page_Data.Messages_Contacts_Data[2].id}
          />
          {AllContactsMessage}
        </div>
        <div className="Messages_from_persons">
          <Messages_from_person
            name={props.Messages_Page_Data.Messages_fromPersons_Data[0].name}
            message={
              props.Messages_Page_Data.Messages_fromPersons_Data[0].message
            }
            id={props.Messages_Page_Data.Messages_fromPersons_Data[0].id}
          />
          <Messages_from_person
            name={props.Messages_Page_Data.Messages_fromPersons_Data[1].name}
            message={
              props.Messages_Page_Data.Messages_fromPersons_Data[1].message
            }
            id={props.Messages_Page_Data.Messages_fromPersons_Data[1].id}
          />
          <Messages_from_person
            name={props.Messages_Page_Data.Messages_fromPersons_Data[2].name}
            message={
              props.Messages_Page_Data.Messages_fromPersons_Data[2].message
            }
            id={props.Messages_Page_Data.Messages_fromPersons_Data[0].id}
          />
        </div>
        <div className="Message_text">
          <textarea
            ref={TextFromTextArea}
            onChange={Change_Text}
            value={props.Messages_Page_Data.MessageText}
          />
          <button onClick={ReturnText}>Вызвать текст</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
