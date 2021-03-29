import React from "react";
import "./Messages.css";
import Contacts from "./Messages_contacts/Contacts.js";
import Messages_from_person from "./Messages_from_persons/Messages_from_person";
import { ActionCreatorReturnText } from "../../redux/state";
import { ActionCreatorChangeText } from "../../redux/state";
import Messages from "./Messages";
import { connect } from "react-redux";

// const Messages_Container = (props) => {

//   let ReturnText = () => {
//     props.dispatch(ActionCreatorReturnText());
//   };

//   let ActionCreator = (text) => {
//     props.dispatch(ActionCreatorChangeText(text));
//   };

//   return (<Messages Change_Text_action={ActionCreator} Send_text={ReturnText} Messages_Page_Data={props.Messages_Page_Data}/>);
// }

// export default Messages_Container

let mapStateToProps = (state) => {
  return {
    Messages_Page_Data : state.Messages_page
  }
}

let mapDispatchToProps=(dispatch)=> {
  return {
    Change_Text_action : (text) => {
      dispatch(ActionCreatorChangeText(text))},
    Send_text : () => {
      dispatch(ActionCreatorReturnText())},
  }
}
const Messages_Container_con = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default Messages_Container_con;
