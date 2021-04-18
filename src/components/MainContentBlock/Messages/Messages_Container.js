import "./Messages.css";
import {ActionCreatorChangeText, ActionCreatorReturnText} from '../../redux/Message_Page_reducer'
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    Messages_Page_Data : state.Messages_page
  }
}

let Messages_Container_con = connect(mapStateToProps, {ActionCreatorReturnText, ActionCreatorChangeText})(Messages)

export default Messages_Container_con;
