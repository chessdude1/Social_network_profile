import Experience_wall from "./Experience_wall/Experience_wall";
import "./Profile.css";
import wall_profile from "../../img/wall_profile.jpg";
import cat_profile from "../../img/cat_profile.jpg";
import StatusWithHooks from "./status/statusWithHooks";
import { Redirect } from "react-router";
import React, { useState } from "react";
import userEmpty from "../../img/userEmpty.png";

const Profile = (props) => {
    const MainPhotoSelected = (e) => {
      if (e.target.files.length) {
        props.SavePhoto(e.target.files[0])
      }
    }
    const [editMode, setEditMode] = useState(false)
    return (
      <div className="ProfileWrapper">
        <img src={wall_profile} className="wall_profile"></img>
        <div className="Profile_header">
          <div className="Profile_logo">
          <img
              src={props.ProfileSmallPhoto || userEmpty}
              className="profilePicture"
            ></img>
            <div>{props.isAuth && <input type="file" onChange={MainPhotoSelected}></input>}</div>
            <p>{props.ProfileFullName}</p>
            <p>{props.ProfileAboutMe}</p>
            {editMode ? <ProfileForm goToEditMode={() => {setEditMode(false)} } /> : <ProfileLocal goToEditMode={() => {setEditMode(true)}} profile={props.profile}/>} 
            <StatusWithHooks
              status={props.Status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className="Profile_name">
            <h1>Kristin W.</h1>
          </div>
          <div className="Profile_interface">
            <div className="Job_name">UI/UX Designer</div>
            <div className="Add profile section">
              <button>Add profile section</button>
            </div>
          </div>
        </div>
        <div className="About Me">
          <h1>About Me</h1>
          <p>
            UX design is all about identifying and solving user problems; UI
            design is all about creating intuitive, aesthetically-pleasing,
            interactive interfaces. UX design usually comes first in the product
            development process, followed by UI. The UX designer maps out the
            bare bones of the user journey; the UI designer then fills it in
            with visual and interactive elements.
          </p>
        </div>
        <Experience_wall />
      </div>
    );
  }

const Contact = ({contactTitle, contactValue}) => {
  return (<div>
    <b>{contactTitle}</b> : {contactValue}
  </div>)
}


const ProfileLocal = (props) => {
  return (
    <div>
            <button onClick={props.goToEditMode}>Change</button>
            <div>
              Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.lookingForAJob && <div> 
              <b> My professional skills</b> : {props.profile.lookingForAJobDescription}
            </div> }
            <div>
              <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                return (
                <Contact key ={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)
              })}
              </div>      
    </div>
  )
}

const ProfileForm = (props) => {
  return (
    <div>
            <button onClick={props.goToEditMode}>Change</button>
            <div>
             <h1>FORM</h1>
              </div>      
    </div>
  )
}



export default Profile;
