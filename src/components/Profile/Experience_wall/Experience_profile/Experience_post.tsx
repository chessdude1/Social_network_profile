import "./Experience_post.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utilites/validators";
import { InputExperience } from "../../../common/FormsControl";

const maxLength = maxLengthCreator(50)

type Experience_post_form_props_type = {
  handleSubmit : any
}

type Experience_post_props_type = {
  Experience_post : any,
  ChProfilePageText : (values : string) => void,
  Return_MessageText : () => void,
}

const Experience_post_form : React.FC<Experience_post_form_props_type> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
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

const Experience_post : React.FC<Experience_post_props_type> = (props) => {
  let AllPostOnWall = props.Experience_post.map(
    (messages : any) => messages.text
  );
  let AddNewExperience = (values : any) => {
    props.ChProfilePageText(values.ExperienceForm);
    props.Return_MessageText();
  };

  return (
    <div className="Experience_post_block">
      <div className="Experience_post_pic"></div>
      <div className="Experience_post_description">
        <AddPostReduxForm onSubmit={AddNewExperience} />
        {props.Experience_post.map((u : any) => {
          return <div>{u.text}</div>;
        })}
      </div>
    </div>
  );
};
export default Experience_post;
