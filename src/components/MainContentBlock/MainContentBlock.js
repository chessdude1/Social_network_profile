import { Route, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import Profile from "../Profile/Profile"
import "./MainContentBlock.css"
import Messages from "./Messages/Messages"

const Main_content_block = () => {
    return (
          <div class="Main_content_block">
          <Header/>
            <Route path='/Profile' component={Profile}/>
            <Route path='/Messages' component={Messages}/>
        </div>

    )
}

export default Main_content_block