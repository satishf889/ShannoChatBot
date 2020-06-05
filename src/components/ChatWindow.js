import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { IoIosPaperPlane } from "react-icons/io";

export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleTextField = (event) => {
    let temp = event.target.value;
    setMessage(temp);
  };

  const handleSend = () => {
    let temp = message;
    if (message !== "") {
      let message = {
        mess: temp,
        sender: "user",
      };
      setMessage("");
      setMessages((messages) => [...messages, message]);
    }
  };

  // var messages = [
  //   { mess: "Hi", sender: "user" },
  //   { mess: "Hello", senser: "bot" },
  //   { mess: "Hi", sender: "user" },
  //   { mess: "Hello", senser: "bot" },
  //   { mess: "Hi", sender: "user" },
  //   { mess: "Hello", senser: "bot" },
  //   { mess: "Hi", sender: "user" },
  //   { mess: "Hello", senser: "bot" },
  //   { mess: "Hi", sender: "user" },
  //   { mess: "Hello", senser: "bot" },
  // ];

  return (
    <>
      <div className="chatwindow">
        <h3 className="chat-head">Chat Bot</h3>
        <div className="chat">
          {messages.map((mess, index) => {
            return <ChatMessage key={index} message={mess} />;
          })}
        </div>
      </div>
      <div className="absolute">
        <textarea
          className="message-box"
          placeholder="Write message"
          rows="3"
          value={message}
          onChange={handleTextField}
        />
        <div style={{ color: "white", margin: "auto" }}>
          <IoIosPaperPlane size={32} onClick={handleSend} />
        </div>
      </div>
    </>
  );
}
