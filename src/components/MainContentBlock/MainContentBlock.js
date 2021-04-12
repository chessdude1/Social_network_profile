import { Route, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Header_container from "../Header/Header_container"
import Profile_Container from "../Profile/Profile_Container"
import Contact_messages_container from "./Contacts_Messages/Contact_messages_container"
import "./MainContentBlock.css"
import Messages_Container from "./Messages/Messages_Container"
import Settings from "./Settings/Settings"


const Main_content_block = (props) => {
    return (
          <div class="Main_content_block">
            <Header_container/>
            <Route path='/Profile/:userID?' render={() => <Profile_Container state={props.state} dispatch={props.dispatch}/>}/>
            <Route path='/Messages' render={() => <Messages_Container Messages_Page_Data={props.state.Messages_page} dispatch={props.dispatch} />}/>
            <Route path='/contact_messages' render={() => <Contact_messages_container />}/>
            <Route path='/Settings' render={()=> <Settings/>}/>
        </div>

    )
}

export default Main_content_block