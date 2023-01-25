import React from "react";
import MainChat from "../Components/MainChat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className=" bg-primary w-screen h-screen flex justify-center items-center ">
      <div className=" flex rounded-lg  w-4/5 xs:w-[90%] md:w-[90%] h-5/6 overflow-hidden shadow-xl">
        <Sidebar />
        <MainChat />
      </div>
    </div>
  );
};

export default Home;
