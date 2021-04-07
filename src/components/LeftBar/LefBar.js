import { NavLink } from "react-router-dom";
import classes from "./LeftBar.module.css";

const LeftBar = () => {
  return (
    <div className={classes.LeftBar}>
      <div className="Icon">
        <img src="data:image/png;base64,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"></img>
      </div>
      <div className="Leftbar_menu">
       <div> <NavLink to="/Profile" activeClassName={classes.activeButton}>Profile</NavLink> </div>
       <div> <NavLink to="/Experience" activeClassName={classes.activeButton}>Experience</NavLink></div>
       <div><NavLink to="/contact_messages" activeClassName={classes.activeButton}>Contact Messages</NavLink></div>
       <div><NavLink to="/Messages" activeClassName={classes.activeButton}>Messages</NavLink></div>
       <div> <NavLink to="/Education" activeClassName={classes.activeButton}>Education</NavLink></div>
       <div> <NavLink to="/Interests" activeClassName={classes.activeButton}>Interests</NavLink></div>
       <div> <NavLink to="/Settings" activeClassName={classes.activeButton}>Settings</NavLink></div>
       
      </div>
      <div className="PremiumButton">Try Premium</div>
    </div>
  );
};

export default LeftBar;
