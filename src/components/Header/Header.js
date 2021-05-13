import { NavLink } from "react-router-dom"
import "./Header.css"

const Header=({loginStatus, login, logout}) => {
    return(<header>
        <div className="Search_block">
          <button>Search</button>
        </div>
        <nav >
          <div className="item Nav_home">Home</div>
          <div className="item Nav_My_network">My Network</div>
          <div className="item Nav_Messaging">Messaging</div>
        </nav>
        { loginStatus ? <div>{login} <button onClick={logout}>logout</button></div>   : <NavLink to="/Login">Login</NavLink> }
      </header>)
}

export default Header