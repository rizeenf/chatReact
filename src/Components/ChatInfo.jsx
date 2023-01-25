import React from "react";
import Add from "../assets/img/add.png";
import Cam from "../assets/img/cam.png";
import More from "../assets/img/more.png";

const ChatInfo = () => {
  return (
    <div className=" bg-creamDarker flex flex-row justify-between p-3 items-center">
      <div className=" flex flex-row items-center gap-3 ">
        <img
          src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt="Profil image"
          className=" h-10 w-10 rounded-full"
        />
        <span className=" font-semibold text-md text-text">Rizee kun</span>
      </div>
      <div className=" flex flex-row items-center">
        <img
          src={Add}
          alt="Add Contacts"
          className=" w-8 h-8 cursor-pointer hover:bg-cream"
        />
        <img
          src={Cam}
          alt="Video call"
          className=" w-8 h-8 cursor-pointer hover:bg-cream"
        />
        <img
          src={More}
          alt="More Info"
          className=" w-8 h-8 cursor-pointer hover:bg-cream"
        />
      </div>
    </div>
  );
};

export default ChatInfo;
