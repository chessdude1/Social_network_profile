import axios from "axios";
import React from "react";
import  userPhoto from '../../../img/user.png'

class Contacts_messages extends React.component {
  constructor(props) {
    super(props);
  }
  getUsers = () => {
    if (this.props.Contacts_messages.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
          this.props.SetUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        {this.props.Contacts_messages.map((u) => (
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
                    this.props.Follow(u.id);
                  }} >
                  {" "}
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.UnFollow(u.id);
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
}

