import { Field, reduxForm } from 'redux-form';
import { Textarea, InputProfile } from '../../common/FormsControl';
import {maxLengthCreator, required} from '../../../utilites/validators'
import style from './ProfileForm.module.css'
 
const maxLength = maxLengthCreator(50)
const maxLengthForNetwork = maxLengthCreator(20)

// const Contact = ({contactTitle, contactValue}) => {
//   return (<div>
//     <b>{contactTitle}</b> : {contactValue}
//   </div>)
// }

const ProfileForm = (props) => {
  debugger
  return (
    <form onSubmit={props.handleSubmit}>
      <button onDoubleClick={props.goToEditMode}>Save</button>
      {props.error && <div className ={style.textError}>
            {props.error}
        </div>}
      <div>
        <b>Full name</b>
        : {<Field placeholder = {'Full name'} name={'fullName'}  component={Textarea} validate={[required, maxLength]}></Field>}
      </div>
      <div>
      <b>Looking for a job</b>:
       {<Field name={'lookingForAJob'}  component={'input'} type={'checkbox'}></Field>}
      </div>
      <div>
        <b>My professional skills</b>
        : {<Field placeholder = {'skills'} name={'lookingForAJobDescription'}  component={Textarea} validate={[required, maxLength]}></Field>}
      </div>
      <div>
      <b>About me</b>:
       {<Field placeholder = {'About me'} name={'aboutMe'}  component={Textarea} validate={[required, maxLength]} type={'checkbox'}></Field>}
      </div>
      <div>
      <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
      return (<div > 
        <b>{key} : {<Field placeholder = {'Enter network correct'} name={`contacts.${key}`}  component={Textarea} ></Field>}</b>
      </div>)
              })}
        </div> 
    </form>
  );
};

const ProfileReduxForm =  reduxForm({form : 'edit-profile'})(ProfileForm)

export default ProfileReduxForm 