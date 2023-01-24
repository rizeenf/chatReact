import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Find a chat.."
        className=" bg-creamDark w-full mx-3 p-2 placeholder:text-text placeholder:text-sm border-b-[1px] border-white"
      />
    </div>
  );
};

export default SearchBar;
