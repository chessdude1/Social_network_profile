import { NavLink } from "react-router-dom";
import "./Contacts.css";

const Contacts = (props) => {
  return (
    <div className="Contact_wrapper">
      <NavLink to={"/Messages/contact" + props.id}>{props.name} </NavLink>
    </div>
  );
};

export default Contacts;
