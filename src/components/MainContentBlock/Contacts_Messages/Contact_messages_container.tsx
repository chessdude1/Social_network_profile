import Contacts_messagesC from './Contacts_messagesC'


type Contacts_messages_type = MapDispatchPropsType & MapStatePropsType

type MapDispatchPropsType = {
  isFetchingSwitch : (isFetchingStatus : boolean) => void
  SetUsers : (users : any) => void
  unfollowAPIthunkCreator : (userId : number) => void
  UnFollow : (userId : number) => void
  followingInProgressSwitch : (followingStatus : boolean, userId : number) => void
  followAPIthunkCreator : (userId : number) => void
  Follow : (userId : number) => void
  ChangeCurrentPage : (e : number) => void,
  getUsersAPIthunkCreator : (CurrentPage : number, PageSize : number, name: string, friend ?: string) => void,
}

type MapStatePropsType = {
  CurrentPage : number
  PageSize : number
  isFetching : boolean
  totalCount : number
  Contacts_messages : string
  followingStatus : any
  AuthStatus : boolean
}

const Contact_messages_container = () => {
  return ( <div>
  <Contacts_messagesC />
  </div>
  )
}

export default Contact_messages_container
