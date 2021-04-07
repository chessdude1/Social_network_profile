import { Route, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import Profile from "../Profile/Profile"
import Contact_messages_container from "./Contacts_Messages/Contact_messages_container"
import "./MainContentBlock.css"
import Messages_Container from "./Messages/Messages_Container"


const Main_content_block = (props) => {
    return (
          <div class="Main_content_block">
          <Header/>
            <Route path='/Profile' render={() => <Profile state={props.state} dispatch={props.dispatch}/>}/>
            <Route path='/Messages' render={() => <Messages_Container Messages_Page_Data={props.state.Messages_page} dispatch={props.dispatch} />}/>
            <Route path='/contact_messages' render={() => <Contact_messages_container />}/>
        </div>

    )
}

export default Main_content_block