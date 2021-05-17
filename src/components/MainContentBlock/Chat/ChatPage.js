import React, { useEffect, useState } from "react";




export const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat = () => {
  const [wsChannel, setWsChannel] = useState(null)

  useEffect(()=> {
    function createChannel() {
      setWsChannel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
      setTimeout(10000)
    }
    createChannel() 
  })

  useEffect(()=> { 
    wsChannel?.addEventListener('close', ()=> {
      console.log('Close WS')
    })
  },[wsChannel])

  return (
    <div>
      <span>Its my chat</span>
      <ChatMessages ws={wsChannel}/>
      <AddMessageForm ws={wsChannel}/>
    </div>
  );
};



const ChatMessages = ({ws}) => {
  const[TestArray, setMessages] = useState([])
  debugger
    // if (ws != null) {
    useEffect(()=> {
        ws?.addEventListener('message', (e)=> {
          let newMessages =JSON.parse(e.data)
          setMessages((prevMessages) =>[...prevMessages, ...newMessages])
        })
    }, [ws])
  // }

  // const[TestArray, setMessages] = useState([''])
 
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

const AddMessageForm = ({ws}) => {
    // const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    const [message, setMessage] = useState('')
    const [SendButtonStatus, setReadyStatus] = useState('pending')
    useEffect(()=> {
      ws?.addEventListener('open', (e)=> {
        setReadyStatus('ready')
      })
    },[ws])

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
      <button disabled={SendButtonStatus != 'ready'} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
