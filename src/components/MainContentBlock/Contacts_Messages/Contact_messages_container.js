import { connect } from "react-redux"
import { Change_CurrentAc, FollowAC, setUsersAc, UnFollowAc } from "../../redux/Contacts_messages_reducer"
import Contacts_messagesC from './Contacts_messagesC'
import React from "react";
import axios from "axios";


class Contacts_messagesAPI extends React.Component {
    constructor(props) {  // в конструктор один раз передаеются пропсы (когда конструктор создается)//
      super(props);
    }
  
    componentDidMount (){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`).then( // этот запрос выполнится один раз, тоесть мы сетаем юхеров один раз //
      (response) => {this.props.SetUsers(response.data.items);
      })
    }
  
    OnPageChanged = (e) => {
      this.props.ChangeCurrentPage(e);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.PageSize}`).then( 
      (response) => {this.props.SetUsers(response.data.items);})
    } // это функция принимающая изменяемую страницу, закидывающая ее в state, потом делает AJAX запрос и все это передается в onClick в button //
  
    render() {
      return(<Contacts_messagesC totalCount={this.props.totalCount} 
          PageSize={this.props.PageSize}
          CurrentPage={this.props.CurrentPage}
          Contacts_messages={this.props.Contacts_messages}
          Follow={this.props.Follow}
          UnFollow={this.props.UnFollow}
          OnPageChanged={this.OnPageChanged} />)
      }
  }
  

let mapStateToProps = (state) => {
    return {
        Contacts_messages : state.Contacts_messages.users,
        totalCount : state.Contacts_messages.totalCount,
        PageSize : state.Contacts_messages.PageSize,
        CurrentPage : state.Contacts_messages.CurrentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Follow : (userId) => {
            dispatch( FollowAC(userId))
        },
        UnFollow : (userId) => {
            dispatch( UnFollowAc(userId))
        },
        SetUsers : (users) => {
            dispatch ( setUsersAc(users))
        },
        ChangeCurrentPage: (page) => {
            dispatch ( Change_CurrentAc(page))
        }
    }
}

let Contact_messages_container = connect(mapStateToProps,mapDispatchToProps)(Contacts_messagesAPI)

export default Contact_messages_container
