import React, { useState, useEffect } from "react";
import { IoIosPaperPlane } from "react-icons/io";
import ChatMessage from "./ChatMessage";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { mess: "Hi my name is Shanno. I am a personal bot", sender: "bot" },
  ]);

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
      if (temp.includes("Hi") || temp.includes("Hello")) {
        let message = {
          mess: "How may I help you?",
          sender: "bot",
        };
        setMessage("");
        setMessages((messages) => [...messages, message]);
      } else {
        let message = {
          mess: "I am currently in development I am may help you later. Byee!",
          sender: "bot",
        };
        setMessage("");
        setMessages((messages) => [...messages, message]);
      }
    }
  };

  // var messages = [
  //   { mess: "Hi my name is Shanno. I am a personal bot", sender: "bot" },
  //   { mess: "Hello", sender: "user" },
  //   // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // { mess: "Hi", sender: "user" },
  // { mess: "Hello", senser: "bot" },
  // ];
  useEffect(() => {
    const messageReply = () => {
      console.log(messages);
      let length = messages.length;
      if (length > 1 && messages[length - 1]["sender"] !== "bot") {
        if (
          messages[length - 1]["mess"].includes("Hi") ||
          messages[length - 1]["mess"].includes("Hello")
        ) {
          let message = {
            mess: "How may I help you?",
            sender: "bot",
          };
          setMessage("");
          setMessages((messages) => [...messages, message]);
        } else {
          let message = {
            mess:
              "I am currently in development I am may help you later. Byee!",
            sender: "bot",
          };
          setMessage("");
          setMessages((messages) => [...messages, message]);
        }
      }
    };
    return () => {
      messageReply();
    };
  }, [messages]);

  return (
    <div className="chat-screen">
      <div className="chat-screen-header">
        <span className="header-text">Chat Bot</span>
      </div>
      <div className="chat-box">
        {messages.map((mess, index) => {
          return <ChatMessage key={index} message={mess} />;
        })}
      </div>
      <div className="input">
        <textarea
          className="message-box"
          placeholder="Write message"
          rows="3"
          value={message}
          onChange={handleTextField}
        />
        <div
          style={{
            color: "white",
            margin: "auto",
          }}>
          <IoIosPaperPlane size={32} onClick={handleSend} />
        </div>
      </div>
    </div>
  );
}
