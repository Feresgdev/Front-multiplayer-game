import React, { useEffect } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5430");

export default function Chat() {
  const message = () => {
    socket.emit("send_message", { message: "hello there" });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      window.alert(data);
    });
  }, [socket]);
  return (
    <div>
      <label htmlFor="">Send message</label>
      <input type="text" />
      <button type="button" onClick={message}>
        Send
      </button>
    </div>
  );
}
