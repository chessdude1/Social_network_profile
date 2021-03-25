import { NavLink } from "react-router-dom";
import "./Messages_from_persons.css";

const Messages_from_person = (props) => {
  return (
    <div className="Messages_wrapper">
      <NavLink to={"/Messages/" + props.id}>
        {props.name + " Message: " + " " + props.message}
      </NavLink>
    </div>
  );
};

export default Messages_from_person;
