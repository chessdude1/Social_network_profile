import './Messages_from_persons.css'
const Messages_from_person = (props) => {
    return (
        <div className="Messages_wrapper">
            {props.name + ' Message: ' + ' ' + props.message}
        </div>
    )
}

export default Messages_from_person;