import React from "react";
import "./Messages.css";
import Contacts from "./Messages_contacts/Contacts.js";
import Messages_from_person from "./Messages_from_persons/Messages_from_person";
import { ActionCreatorReturnText } from "../../redux/state";
import { ActionCreatorChangeText } from "../../redux/state";
import Messages from "./Messages";
import { connect } from "react-redux";


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
let Messages_Container_con = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default Messages_Container_con;
