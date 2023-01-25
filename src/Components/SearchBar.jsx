import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Find a chat.."
        className=" bg-cream w-full mx-3 p-2 placeholder:text-text placeholder:text-sm border-b-[1px] text-sm border-white"
      />
    </div>
  );
};

export default SearchBar;
