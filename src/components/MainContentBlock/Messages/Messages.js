import './Messages.css'
import Contacts from './Messages_contacts/Contacts.js'
import Messages_from_person from './Messages_from_persons/Messages_from_person'

const Messages = () => {
  return (
    <div className="Messages_wrapper">
    <div className="Top_messages">
      <h1>Messages</h1>
    </div >
    <div className="Messages_content_block">
        <div className="Messages_contacts">
      <Contacts name='Dima'/>
      <Contacts name='Valera'/>
      <Contacts name='Sonya'/>
      </div>
      <div className="Messages_from_persons">
          <Messages_from_person name='Dima' message='Hello'/>
      </div>
      </div>
    </div>
  );
};

export default Messages;
