import React from "react";
import ChatInfo from "./ChatInfo";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

const MainChat = () => {
  return (
    <div className=" w-2/3 flex flex-col justify-between">
      <ChatInfo />
      <Messages />
      <ChatInput />
    </div>
  );
};

export default MainChat;
