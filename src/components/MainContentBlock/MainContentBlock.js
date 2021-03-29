import Header from "../Header/Header"
import Profile from "../Profile/Profile"
import "./MainContentBlock.css"
<<<<<<< HEAD
import Messages from "./Messages/Messages"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Messages_Container from "./Messages/Messages_Container"
=======
>>>>>>> parent of 5ed0742 (add_second_page)

=======
>>>>>>> parent of 5afe556 (React_redux-add)
=======
>>>>>>> parent of 5afe556 (React_redux-add)
=======
>>>>>>> parent of 5afe556 (React_redux-add)

const Main_content_block = (props) => {
    return (
<<<<<<< HEAD
          <div class="Main_content_block">
          <Header/>
            <Route path='/Profile' render={() => <Profile/>}/>
            {/* <Route path='/Messages' render={() => <Messages Messages_fromPersons_Data={props.Messages_fromPersons_Data} Messages_Contacts_Data={props.Messages_Contacts_Data} />}/> */}
            <Route path='/Messages' render={() => <Messages Messages_Page_Data={props.state.Messages_page} />}/>
        </div>

=======
        <div class="Main_content_block">
        <Header/>
        <Profile/>
      </div>
>>>>>>> parent of 5ed0742 (add_second_page)
    )
}

export default Main_content_block