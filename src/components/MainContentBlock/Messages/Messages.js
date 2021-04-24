import React from "react";
import "./Messages.css";
import Contacts from "./Messages_contacts/Contacts.js";
import Messages_from_person from "./Messages_from_persons/Messages_from_person";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utilites/validators";
import { Textarea } from "../../common/FormsControl";
import { memo } from "react";


const maxLength = maxLengthCreator(50)

const AddMassageForm = (props) => {
  return ( <form onSubmit={props.handleSubmit}>
  <Field placeholder = {'Enter your message'} name={'MessageText'}  component={Textarea} validate={[required, maxLength]}></Field>
    <div>
      <button >Send</button>
    </div> 
  </form>
  )
}

const AddMessageReduxForm = reduxForm(
  {form : 'MessageForm'})
  (AddMassageForm)


const Messages = React.memo((props) => {
  console.log('Hello') 
  const AddNewMesssage = (values) => {
    props.ActionCreatorChangeText(values.MessageText);
    props.ActionCreatorReturnText();
  }
  
    let AllContactsMessage = props.Messages_Page_Data.Messages_fromPersons_Data.map(
      (data) => (
        <Messages_from_person
          name={data.name}
          message={data.message}
          id={data.id}
        />
      )
    );
  
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
            <AddMessageReduxForm onSubmit={AddNewMesssage}/>
          </div>
        </div>
      </div>
    );
  })


export default Messages;

