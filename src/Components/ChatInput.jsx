import React from "react";
import File from "../assets/img/attach.png";
import Img from "../assets/img/addImage.png";

const ChatInput = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-creamDark h-[10%] w-full px-5">
      <input
        type="text"
        placeholder="Type something.. "
        className=" bg-creamDark w-full mx-1 p-2 placeholder:text-text placeholder:text-sm border-b-[1px] text-sm border-white"
      />

      <div className="flex flex-row gap-1 justify-center items-center p-2 ">
        <form
          action=""
          className=" flex flex-row justify-center items-center gap-2"
        >
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label
            htmlFor="file"
            className=" w-8 h-8 cursor-pointer  rounded-lg hover:bg-cream"
          >
            <img src={File} alt="Add File" />
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label
            htmlFor="file"
            className=" w-8 h-8 cursor-pointer rounded-lg hover:bg-cream"
          >
            <img src={Img} alt="Add image" />
          </label>
        </form>
        <button className="bg-creamDarker mx-2 p-3 text-white rounded-md hover:bg-cream">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
