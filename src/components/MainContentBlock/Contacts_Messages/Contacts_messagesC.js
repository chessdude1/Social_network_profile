import axios from "axios";
import  userPhoto from '../../../img/user.png'
import React from "react";


class Contacts_messagesC extends React.Component {
  constructor(props) {  // в конструктор один раз передаеются пропсы (когда конструктор создается)//
    super(props);
  }

  componentDidMount (){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then( // этот запрос выполнится один раз, тоесть мы сетаем юхеров один раз //
    (response) => {this.props.SetUsers(response.data.items);
    })
  }


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
  }
}

export default Contacts_messagesC;