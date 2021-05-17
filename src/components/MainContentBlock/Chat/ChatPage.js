import React, { useEffect, useState } from "react";




export const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat = () => {
  return (
    <div>
      <span>Its my chat</span>
      <ChatMessages />
      <AddMessageForm />
    </div>
  );
};



const ChatMessages = () => {
    const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    const[TestArray, setMessages] = useState([])
    useEffect(()=> {
        ws.addEventListener('message', (e)=> {
            setMessages((prevMessages) =>[...prevMessages, ...JSON.parse(e.data)])
    
        })
    }, [])
 
  return (
        <div style={{height : '400px', overflowY : 'auto'}}>
            {TestArray.map((u, index) => <Message key={index} message={u}/>)}
        </div>);
};

const Message = (props) => {
    return (
        <div>
            <img src={props.message.photo}/>
            <div>
                {props.message.UserName}
            </div>
            <div>
                {props.message.message}    
            </div>
        </div>
    )
}

const AddMessageForm = () => {
    const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    const [message, setMessage] = useState('')

    const sendMessage = ()=> {
        if (!message) {
            return
        }
        ws.send(message);
        setMessage('')
    }
  return (
    <div>
      <textarea onChange={(e)=> setMessage(e.currentTarget.value)} value={message}></textarea>
      <div>
      <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
