import React from "react";
import ChatList from "./ChatList";
import SearchBar from "./SearchBar";
import SideNavbar from "./SideNavbar";

const Sidebar = () => {
  return (
    <div className=" w-1/3 border-r-2 border-white bg-cream ">
      <SideNavbar />
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default Sidebar;
