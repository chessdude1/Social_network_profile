import Experience_wall from './Experience_wall/Experience_wall';
import './Profile.css'
import wall_profile from '../../img/wall_profile.jpg'
import cat_profile from '../../img/cat_profile.jpg'
import StatusWithHooks from './status/statusWithHooks'
import { Redirect } from 'react-router';
import React from "react";
import { memo } from 'react';


class Profile extends React.Component  {
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps != this.props || nextState != this.State)
  }
  render () {
    return(
    <div className="ProfileWrapper">
      <img src={wall_profile} className='wall_profile'></img>
      <div className="Profile_header">
        <div className="Profile_logo">
          <img src={this.props.ProfileSmallPhoto}></img>
          <p>{this.props.ProfileFullName}</p>
          <p>{this.props.ProfileAboutMe}</p>
          <StatusWithHooks status ={this.props.Status} updateStatus = {this.props.updateStatus}/>
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
          development process, followed by UI. The UX designer maps out the bare
          bones of the user journey; the UI designer then fills it in with
          visual and interactive elements.
        </p>
      </div>
      <Experience_wall />
    </div> 
    )
    }
  };

export default Profile