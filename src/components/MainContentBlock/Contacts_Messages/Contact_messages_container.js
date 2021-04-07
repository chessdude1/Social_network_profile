import { connect } from "react-redux"
import { FollowAC, setUsersAc, UnFollowAc } from "../../redux/Contacts_messages_reducer"
import Contacts_messagesC from './Contacts_messagesC'


let mapStateToProps = (state) => {
    return {
        Contacts_messages : state.Contacts_messages.users
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
        }
    }
}

let Contact_messages_container = connect(mapStateToProps,mapDispatchToProps)(Contacts_messagesC)

export default Contact_messages_container

// props.SetUsers ( users: [{
//     id: 1,
//     followed: false,
//     name: "Dmitry",
//     Surname: "Ivanov",
//     location: { country: "Russia", city: "Moscow" },
//   },
//   {
//     id: 2,
//     followed: true,
//     name: "Valery",
//     Surname: "Ivanov",
//     location: { country: "Italy", city: "Milan" },
//   },
//   {
//     id: 3,
//     followed: false,
//     name: "Misha",
//     Surname: "Ivanov",
//     location: { country: "Russia", city: "Gelendzik" },
//   },
//   {
//     id: 4,
//     followed: true,
//     name: "Dmitry",
//     Surname: "Ivanov",
//     location: { country: "Russia", city: "Moscow" },
//   }]