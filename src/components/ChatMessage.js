import React from "react";

export default function Message({ message }) {
  return message.sender === "user" ? (
    <div className="user-message">
      <p>{message.mess}</p>
    </div>
  ) : (
    <div className="bot-message">
      <p>{message.mess}</p>
    </div>
  );
}
