import axios from "axios";
import  userPhoto from '../../../img/user.png'
import React from "react";
import styles from './Contacts_messagesC.module.css'


const Contacts_messagesC= (props) => {
    let pages = [];
    let PagesCount = Math.ceil(props.totalCount / props.PageSize);
    for (let i=1; i <= PagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map(p => {
            return(<button className={p === props.CurrentPage && styles.selectedPage} onClick={()=>{props.OnPageChanged(p)}}>{p}</button>)
          })}
        </div>
        {props.Contacts_messages.map((u) => (
          <div>
            <div><img src={u.photos.small ? u.photos.small : userPhoto }></img></div>
            <div>{u.name}</div>
            <div>{u.id}</div>
            <div>
              {/* {u.location.country}
              {u.location.city} */}
              {u.followed ? (<button onClick={() => {props.Follow(u.id);}}> {" "}
                  Unfollow
                </button>) 
                : (<button onClick={() => {props.UnFollow(u.id)}}> {" "}
                  Follow
                </button>)}
            </div>
          </div>
        ))}
      </div>
    );
  }

export default Contacts_messagesC;