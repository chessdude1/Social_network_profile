import "./Header.css"

const Header=() => {
    return(<header>
        <div className="Search_block">
          <button>Search</button>
        </div>
        <nav >
          <div className="item Nav_home">Home</div>
          <div className="item Nav_My_network">My Network</div>
          <div className="item Nav_Messaging">Messaging</div>
        </nav>
      </header>)
}

export default Header