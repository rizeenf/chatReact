import React from "react";
import addImage from "../assets/img/addImage.png";

const RegisterForm = () => {
  return (
    <div className="bg-primary w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl py-8 px-20">
        <span className="text-4xl font-bold text-creamDarker">Chat React</span>
        <span className="text-xl font-semibold text-creamDarker pb-5">
          Register
        </span>
        <form className="flex flex-col gap-4 justify-center items-center w-full">
          <input
            type="text"
            placeholder="Username"
            className="border-b-2 text-text border-b-cream p-2 w-72"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b-2 text-text border-b-cream p-2 w-72"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 text-text border-b-cream p-2 w-72"
          />
          <input type="file" id="file" style={{ display: "none" }} />
          <label
            htmlFor="file"
            className="text-text cursor-pointer flex flex-row justify-center items-center gap-3 "
          >
            <img src={addImage} alt="Add Image" width="32px" />
            <span className="text-sm"> Choose an Profile picture</span>
          </label>

          <button className=" bg-primary w-1/3 text-text rounded p-2">
            Sign up
          </button>
        </form>
        <span className="text-text text-sm mt-2">
          You do have an account? Login
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
