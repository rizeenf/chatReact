import React from "react";
import MainChat from "../Components/MainChat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className=" bg-primary w-screen h-screen flex justify-center items-center ">
      <div className=" flex rounded-lg border-2 w-4/5 h-5/6 overflow-hidden border-white">
        <Sidebar />
        <MainChat />
      </div>
    </div>
  );
};

export default Home;
