// import axios from "axios";
// import React from "react";
// import  userPhoto from '../../../img/user.png'

// let Contacts_messages = (props) => {
//   if (props.Contacts_messages.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
//       (response) => {props.SetUsers(response.data.items);
//       });
//   }
//   debugger;
//   return (
//     <div>
//       {props.Contacts_messages.map((u) => (          
//         <div>
//           <div><img src={u.photos.small ? u.photos.small : userPhoto }></img></div>    //старый код без классовой компоненты //
//           <div>{u.name}</div>
//           <div>{u.id}</div>
//           <div>
//             {/* {u.location.country}
//             {u.location.city} */}
//             {u.followed ? (
//               <button
//                 onClick={() => {
//                   props.Follow(u.id);
//                 }} >
//                 {" "}
//                 Unfollow
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   props.UnFollow(u.id);
//                 }}
//               >
//                 {" "}
//                 Follow
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contacts_messages;



// import axios from "axios";
// import  userPhoto from '../../../img/user.png'
// import React from "react";
// import styles from './Contacts_messagesC.module.css'


// class Contacts_messagesC extends React.Component {
//   constructor(props) {  // в конструктор один раз передаеются пропсы (когда конструктор создается)//
//     super(props);
//   }

//   componentDidMount (){
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`).then( // этот запрос выполнится один раз, тоесть мы сетаем юхеров один раз //
//     (response) => {this.props.SetUsers(response.data.items);
//     })
//   }

//   OnPageChanged = (e) => {
//     this.props.ChangeCurrentPage(e);
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.PageSize}`).then( 
//     (response) => {this.props.SetUsers(response.data.items);})
//   } // это функция принимающая изменяемую страницу, закидывающая ее в state, потом делает AJAX запрос и все это передается в onClick в button //

//   render() {
//     let pages = [];
//     let PagesCount = Math.ceil(this.props.totalCount / this.props.PageSize);
//     for (let i=1; i <= PagesCount; i++) {
//       pages.push(i)
//     }
//     return (
//       <div>
//         <div>
//           {pages.map(p => {
//             return(<button className={p === this.props.CurrentPage && styles.selectedPage} onClick={()=>{this.OnPageChanged(p)}}>{p}</button>)
//           })}
//         </div>
//         {this.props.Contacts_messages.map((u) => (
//           <div>
//             <div><img src={u.photos.small ? u.photos.small : userPhoto }></img></div>
//             <div>{u.name}</div>
//             <div>{u.id}</div>
//             <div>
//               {/* {u.location.country}
//               {u.location.city} */}
//               {u.followed ? (<button onClick={() => {this.props.Follow(u.id);}}> {" "}
//                   Unfollow
//                 </button>) 
//                 : (<button onClick={() => {this.props.UnFollow(u.id)}}> {" "}
//                   Follow
//                 </button>)}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Contacts_messagesC;