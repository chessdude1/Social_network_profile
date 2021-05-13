import userPhoto from "../../../img/user.png";
import React from "react";
import styles from "./Contacts_messagesC.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { Paginator } from "../../common/paginator/paginator";
import { FindUser } from "./FindUser";

const Contacts_messagesC = (props) => {
  return (
    <div>
      <FindUser OnFilterChanged={props.OnFilterChanged}/>
      <Paginator
        CurrentPage={props.CurrentPage}
        totalCount={props.totalCount}
        PageSize={props.PageSize}
        OnPageChanged={props.OnPageChanged}
      />
      {props.Contacts_messages.map((u) => (
        <div>
          <NavLink to={"/Profile/" + u.id}>
            <div>
              <img src={u.photos.small ? u.photos.small : userPhoto}></img>
            </div>
          </NavLink>
          <div>{u.name}</div>
          <div>{u.id}</div>
          <div>
            {u.followed ? (
              <button
                disabled={props.followingStatus.some((id) => id == u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                {" "}
                UnFollow{" "}
              </button>
            ) : (
              <button
                disabled={props.followingStatus.some((id) => id == u.id)}
                onClick={() => {
                  props.unfolloww(u.id);
                }}
              >
                {" "}
                Follow{" "}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts_messagesC;

