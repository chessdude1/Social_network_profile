import "./Experience_post.css";
import React from "react";
import { ActionCreatorReturn_MessageText } from "../../../redux/state";
import { ActionCreatorChangeProfilePageText } from "../../../redux/state";
import Experience_post from "./Experience_post";
import { connect } from "react-redux";


// const Experience_post_container = (props) => {
//   debugger;
//   let DataTextSave = () => {
//     props.dispatch(ActionCreatorReturn_MessageText());
//   };

//   let ActualTextChange = (text) => {
//     props.dispatch(ActionCreatorChangeProfilePageText(text));
//   };

//   return (
//     <Experience_post
//       Change_Text_Actual={ActualTextChange}
//       SendTextInStateExperience={DataTextSave}
//       Experience_post={props.state.Experience_post}
//       // dispatch={props.dispatch}
//     />
//   );
// };
// export default Experience_post_container;

let mapStateToProps = (state) => {
  return {
    Experience_post : state.Experience_post,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    Change_Text_Actual : (text) => {
      dispatch(ActionCreatorChangeProfilePageText(text))
    },
    SendTextInStateExperience : () => {
      dispatch(ActionCreatorReturn_MessageText())
    }
  }
}
let Experience_post_container_con = connect(mapStateToProps, mapDispatchToProps)(Experience_post)

export default Experience_post_container_con;