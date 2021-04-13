import  userPhoto from '../../../img/user.png'
import React from "react";
import styles from './Contacts_messagesC.module.css'
import { NavLink, Redirect } from 'react-router-dom';
import axios from "axios";
import {followAPIthunkCreator} from '../../redux/Contacts_messages_reducer'


const Contacts_messagesC= (props) => {
    let pages = [];
    let PagesCount = Math.ceil(props.totalCount / props.PageSize);
    for (let i=1; i <= PagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {}
          {pages.map(p => {
            return(<button className={p === props.CurrentPage && styles.selectedPage} onClick={()=>{props.OnPageChanged(p)}}>{p}</button>)
          })}
        </div>
        {props.Contacts_messages.map((u) => (
          <div>
            <NavLink to={'/Profile/' + u.id}>
            <div><img src={u.photos.small ? u.photos.small : userPhoto }></img></div>
            </NavLink>
            <div>{u.name}</div>
            <div>{u.id}</div>
            <div>
              {u.followed ? (<button disabled={props.followingStatus.some(id => id == u.id)} onClick={() => {
                props.follow(u.id)
              }}> UnFollow </button>) 
                : (<button  disabled={props.followingStatus.some(id => id == u.id)} onClick={() => {
                  props.followingInProgressSwitch(true, u.id);
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ }, {
                  withCredentials : true,
                  headers : {
                    'API-KEY' : 'b6a90e3d-08cf-4247-9fbb-5fbf9d42b55d' 
                  }})
                  .then(
                (response) => { if (response.data.resultCode == 0) {
                  props.Follow(u.id)
                  props.followingInProgressSwitch(false, u.id);
                }
                })
                }}>  Follow </button>)}
            </div>
          </div>
        ))}
      </div>
    );
  }

export default Contacts_messagesC;
// UnFollow
// Follow


