import axios from "axios";
import React from "react";
import  userPhoto from '../../../img/user.png'

let Contacts_messages = (props) => {
  if (props.Contacts_messages.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {props.SetUsers(response.data.items);
      });
  }
  debugger;
  return (
    <div>
      {props.Contacts_messages.map((u) => (
        <div>
          <div><img src={u.photos.small ? u.photos.small : userPhoto }></img></div>
          <div>{u.name}</div>
          <div>{u.id}</div>
          <div>
            {/* {u.location.country}
            {u.location.city} */}
            {u.followed ? (
              <button
                onClick={() => {
                  props.Follow(u.id);
                }} >
                {" "}
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.UnFollow(u.id);
                }}
              >
                {" "}
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts_messages;
