import { Route, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import Profile from "../Profile/Profile"
import "./MainContentBlock.css"
import Messages from "./Messages/Messages"

const Main_content_block = (props) => {
    return (
          <div class="Main_content_block">
          <Header/>
            <Route path='/Profile' render={() => <Profile/>}/>
            {/* <Route path='/Messages' render={() => <Messages Messages_fromPersons_Data={props.Messages_fromPersons_Data} Messages_Contacts_Data={props.Messages_Contacts_Data} />}/> */}
            <Route path='/Messages' render={() => <Messages Messages_Page_Data={props.state.Messages_page} />}/>
        </div>

    )
}

export default Main_content_block