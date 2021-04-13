import { NavLink } from "react-router-dom"
import "./Header.css"


const Header=(props) => {
    return(<header>
        <div className="Search_block">
          <button>Search</button>
        </div>
        <nav >
          <div className="item Nav_home">Home</div>
          <div className="item Nav_My_network">My Network</div>
          <div className="item Nav_Messaging">Messaging</div>
        </nav>
        { props.loginStatus ? 'I work' : <NavLink to="/Login">Login</NavLink> }
      </header>)
}

export default Header