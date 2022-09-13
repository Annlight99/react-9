import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "../styles/style.css";

export const Chat = () => {
export const Chat = ({ chatId }) => {
  return (
    <div>
      <MessageList />
      <MessageForm />
      <h1>chat{chatId}</h1>
      <MessageList chatId={chatId} />
      <MessageForm chatId={chatId} />
    </div>
  );
};