import "./Experience_post.css";
import React from "react";
import store, { ActionCreatorReturn_MessageText } from "../../../redux/state";
import { ActionCreatorChangeProfilePageText } from "../../../redux/state";

const Experience_post = (props) => {
  let AllPostOnWall = props.Experience_post.Experience_post_description.map(
    (messages) => messages.text
  );
  let TextFromTextArea = React.createRef();

//   let SendTextInState = () => {
//       props.dispatch(ActionCreatorReturn_MessageText())
//   }

  let SendTextInState = () => {
    props.SendTextInStateExperience();
  };

//   let ChangeText = () => {
//       let text = TextFromTextArea.current.value;
//       props.dispatch(ActionCreatorChangeProfilePageText(text))
//   }

  let ChangeText = () => {
    let text = TextFromTextArea.current.value;
    props.Change_Text_Actual(text);
  };

  return (
    <div className="Experience_post_block">
      <div className="Experience_post_pic"></div>
      <div className="Experience_post_description">
        {props.userFirstName} <br />
        {props.userSurname}
        <textarea
          ref={TextFromTextArea}
          onChange={ChangeText}
          value={props.Experience_post.CurrentText}
        ></textarea>
        <button onClick={SendTextInState}>I work</button>
        {AllPostOnWall} 
      </div>
    </div>
  );
};
export default Experience_post;
