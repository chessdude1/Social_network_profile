import { Redirect, Route, Router } from "react-router"
import { BrowserRouter } from "react-router-dom"
import React, { Suspense } from "react";
import Header_container from "../Header/Header_container"
import Contact_messages_container from "./Contacts_Messages/Contact_messages_container"
import "./MainContentBlock.css"
import Messages_Container from "./Messages/Messages_Container"
import LoginContainer from "../Header/Login/LoginContainer"
import { ReactLazyHOC } from "../HOC/ReactLazy";

const Profile_Container= React.lazy(()=> 
  import ("../Profile/Profile_Container")
)


const Settings= React.lazy(()=> 
  import ("./Settings/Settings")
)

const Main_content_block = (props) => {
    return (
          <div class="Main_content_block">
            <Header_container/>
                <Route exact path='/' render={()=> <Redirect to={'/Profile'}/>}/>
                <Route path='/Login' render={() => <LoginContainer/>}/>
                <Route path='/Profile/:userID?' render={() => ReactLazyHOC(Profile_Container)}/>
            <Route path='/Messages' render={() => <Messages_Container Messages_Page_Data={props.state.Messages_page} dispatch={props.dispatch} />}/>
            <Route path='/contact_messages' render={() => <Contact_messages_container />}/>
            <Suspense fallback='loading...'>
                <Route path='/Settings' render={()=> ReactLazyHOC(Settings)}/>
            </Suspense>
        </div>

    )
}

export default Main_content_block