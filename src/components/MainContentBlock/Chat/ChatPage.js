import React, { useEffect, useState } from "react";
import userPhoto from "../../../img/user.png";

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
      let ws

      const closeHandler = ()=> {
        console.log('Close')
        setTimeout(CreateChannel, 3000)
      }

      function CreateChannel() {
        ws?.removeEventListener('close', closeHandler)
        ws?.close()
        ws= new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
        if (ws !== null) {
        }
        setWsChannel(ws)
        ws?.addEventListener('close', closeHandler) 
      }

      CreateChannel();

      return ()=> {
        ws?.removeEventListener('close', closeHandler) //предотвращение утечки памяти, отписка от всех событий //
        ws.close()
      }
    }, [])
    
  return (
    <div>
      <span>Its my chat</span>
      <ChatMessages ws={wsChannel} />
      <AddMessageForm ws={wsChannel} />
    </div>
  );
};

const ChatMessages = ({ ws }) => {
  const [TestArray, setMessages] = useState([]);
  useEffect(() => {
    let messageHandler = (e) => {
      setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
    }
    ws?.addEventListener("message", messageHandler);

    return () => {
      ws?.removeEventListener('message', messageHandler) //предотвращение утечки памяти, отписка от всех событий //
    }

  }, [ws]);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {TestArray.map((u, index) => (
        <Message key={index} message={u} />
      ))}
    </div>
  );
};

const Message = (props) => {
  return (
    <div>
      {props.message.photo ? <img src={props.message.photo}/> : <img src={userPhoto}/> }
      <div>{props.message.UserName}</div>
      <div>{props.message.message}</div>
    </div>
  );
};

const AddMessageForm = ({ ws }) => {
  const [message, setMessage] = useState("");
  const [readyStatus, setReadyStatus] = useState("pending");

  useEffect(() => {
    ws?.addEventListener("open", () => {
      setReadyStatus("ready");
    });
  }, [ws]);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    ws.send(message);
    setMessage("");
  };
  return (
    <div>
      <textarea
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
      ></textarea>
      <div>
        <button disabled ={readyStatus != 'ready'} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
