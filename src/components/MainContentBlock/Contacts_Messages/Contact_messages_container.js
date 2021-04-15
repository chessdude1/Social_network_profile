import { connect } from "react-redux"
import {getUsersAPIthunkCreator, ChangeCurrentPage, Follow, isFetchingSwitch, SetUsers, UnFollow, followingInProgressSwitch, followAPIthunkCreator } from "../../redux/Contacts_messages_reducer"
import Contacts_messagesC from './Contacts_messagesC'
import React from "react";
import Preloader from "../../common/preloader";
import { Redirect } from 'react-router-dom';
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";



class Contacts_messagesAPI extends React.Component {
    constructor(props) {  // в конструктор один раз передаеются пропсы (когда конструктор создается)//
      super(props);
    }
  
    componentDidMount (){
      this.props.getUsersAPIthunkCreator(this.props.CurrentPage, this.props.PageSize)
      // this.props.isFetchingSwitch(true);
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`,{
      //   withCredentials : true
      // }).then( // этот запрос выполнится один раз, тоесть мы сетаем юхеров один раз //
      // (response) => {this.props.SetUsers(response.data.items);
      // this.props.isFetchingSwitch(false)
      // })

    }
  
    OnPageChanged = (e) => {
      this.props.ChangeCurrentPage(e);
      this.props.getUsersAPIthunkCreator(e, this.props.PageSize)
      // this.props.isFetchingSwitch(true);
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.PageSize}`,{
      //   withCredentials : true
      // }).then( 
      // (response) => {this.props.SetUsers(response.data.items);})
      // this.props.isFetchingSwitch(false)
    } // это функция принимающая изменяемую страницу, закидывающая ее в state, потом делает AJAX запрос и все это передается в onClick в button //
  
    render() {
      if (!this.props.AuthStatus) {
        return (<Redirect to={'/Login'}/>)
      }
      return<>
      {this.props.isFetching ? <Preloader/>: <p>I work</p>}
      <Contacts_messagesC totalCount={this.props.totalCount} 
          PageSize={this.props.PageSize}
          CurrentPage={this.props.CurrentPage}
          Contacts_messages={this.props.Contacts_messages}
          Follow={this.props.Follow}
          followingStatus={this.props.followingStatus}
          UnFollow={this.props.UnFollow}
          followingInProgressSwitch={this.props.followingInProgressSwitch}
          follow={this.props.followAPIthunkCreator}
          AuthStatus={this.props.AuthStatus}
          OnPageChanged={this.OnPageChanged} />
          </>
      }
  }
  

let mapStateToProps = (state) => {
    return {
        followingStatus : state.Contacts_messages.followingInProgress,
        Contacts_messages : state.Contacts_messages.users,
        totalCount : state.Contacts_messages.totalCount,
        PageSize : state.Contacts_messages.PageSize,
        CurrentPage : state.Contacts_messages.CurrentPage,
        isFetching : state.Contacts_messages.isFetching,
        AuthStatus : state.Auth.isAuth
    }
}

// let AuthRedirectComponent = (props) => {
//   if (!props.AuthStatus) {
//     return (<Redirect to={'/Login'}/>) }
//     return (<Contacts_messagesAPI {...props}/>)
// }

export default compose (
  connect(mapStateToProps, { Follow, UnFollow, SetUsers, 
    ChangeCurrentPage, isFetchingSwitch, followingInProgressSwitch, getUsersAPIthunkCreator, followAPIthunkCreator}),
  withAuthRedirectComponent
)
(Contacts_messagesAPI)

