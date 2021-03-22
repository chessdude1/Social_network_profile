import './Contacts.css'

const Contacts= (props) => {
    return(
        <div className='Contact_wrapper'>
            {props.name}
        </div>
    )
}

export default Contacts;