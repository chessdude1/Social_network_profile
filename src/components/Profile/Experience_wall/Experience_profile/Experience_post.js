import "./Experience_post.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utilites/validators";
import { InputExperience } from "../../../common/FormsControl";

const maxLength = maxLengthCreator(50)

const Experience_post_form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Write your experience"}
        validate = {[required, maxLength]}
        name={"ExperienceForm"}
        component={InputExperience}>
        </Field>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "ExperienceForm" })(
  Experience_post_form
);

const Experience_post = (props) => {
  let AllPostOnWall = props.Experience_post.Experience_post_description.map(
    (messages) => messages.text
  );
  let AddNewExperience = (values) => {
    props.ChProfilePageText(values.ExperienceForm);
    props.Return_MessageText();
  };

  return (
    <div className="Experience_post_block">
      <div className="Experience_post_pic"></div>
      <div className="Experience_post_description">
        <AddPostReduxForm onSubmit={AddNewExperience} />
        {props.Experience_post.Experience_post_description.map((u) => {
          return <div>{u.text}</div>;
        })}
      </div>
    </div>
  );
};
export default Experience_post;
