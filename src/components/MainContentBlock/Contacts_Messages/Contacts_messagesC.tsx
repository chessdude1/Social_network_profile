import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import userPhoto from "../../../img/user.png";
import { Paginator } from "../../common/paginator/paginator";
import Preloader from "../../common/preloader";
import { ChangeCurrentPage, followAPIthunkCreator, getUsersAPIthunkCreator, unfollowAPIthunkCreator } from "../../redux/Contacts_messages_reducer";
import { GetCurrentPage, GetPageSize, GetTotalCount, GetContacts_messages, GetIsFetching, GetUsersFilter, GetAuthStatus, GetFollowingStatus } from "../../redux/selectors/Contact_messages_reducer";
import { FindUser } from "./FindUser";
import * as queryString from 'querystring'

type UserInList = {
  followed : boolean,
  id : any // конфликт с Array<followingInProgressType>
  name: string
  photos : {
    small: null | string,
    large: null | string,
  }
  status: null | boolean
  uniqueUrlName ?: null | string
}

const Contacts_messagesC = () => {
  const totalCount = useSelector(GetTotalCount)
  const PageSize = useSelector(GetPageSize)
  const dispatch = useDispatch();
  const CurrentPage = useSelector(GetCurrentPage)
  const Contacts_messages = useSelector(GetContacts_messages)
  const isFetching = useSelector(GetIsFetching)
  const filter = useSelector(GetUsersFilter)
  const AuthStatus = useSelector(GetAuthStatus)
  const followingStatus = useSelector(GetFollowingStatus)
  const follow = (userID : number) =>{ dispatch(followAPIthunkCreator(userID))}
  const unfolloww = (userID :  number) => { dispatch(unfollowAPIthunkCreator(userID))}

  const OnPageChanged = (e : number ) => {
    dispatch(ChangeCurrentPage(e));
    dispatch(getUsersAPIthunkCreator(e, PageSize, ''))
  }

  const OnFilterChanged = (name : string , friend : null | undefined | string ) => { //typeof initial_state.filter //
    dispatch(getUsersAPIthunkCreator(1, PageSize, name, friend))
   }

   const history = useHistory()

   useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) 

        let actualPage = CurrentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term }

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }
        dispatch(getUsersAPIthunkCreator(actualPage, PageSize, actualFilter.term, actualFilter.friend))
   },[])

   useEffect(()=> {
    history.push({
      pathname: '/contact_messages',
      search: `?term=${filter.name}&friend=${filter.friend}&page=${CurrentPage}`
    })
  },[filter,CurrentPage])
  debugger
  return (
    <div>
      {isFetching ? <Preloader></Preloader> : <p>Users list</p>}
      <FindUser OnFilterChanged={OnFilterChanged}/>
      <Paginator
        CurrentPage={CurrentPage}
        totalCount={totalCount}
        PageSize={PageSize}
        OnPageChanged={OnPageChanged}
      />
      {Contacts_messages.map((u : UserInList) => (
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
                disabled={followingStatus.some((id) => id == u.id)}
                onClick={() => {
                  follow(u.id);
                }}>
                {" "}
                UnFollow{" "}
              </button>) : 
              (<button
                disabled={followingStatus.some((id) => id == u.id)}
                onClick={() => {
                  unfolloww(u.id);
                }}>
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
