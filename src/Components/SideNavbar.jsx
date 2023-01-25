import React from "react";

const SideNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-creamDarker">
      <span className=" text-xl font-bold p-4 text-text xs:hidden xl:flex ">
        Chat React
      </span>
      <div className="flex flex-row justify-between items-center p-3 gap-2">
        <img
          src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt="Img Profil"
          className=" w-8 h-8 object-cover rounded-full "
        />
        <span className="text-sm text-text">Jimmy Neutron</span>
        <button className=" bg-primary text-text text-sm rounded-md p-1 hover:bg-cream  ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
