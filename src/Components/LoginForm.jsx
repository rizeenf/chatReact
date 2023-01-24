import React from "react";
import addImage from "../assets/img/addImage.png";

const LoginForm = () => {
  return (
    <div className="bg-primary w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl py-8 px-20">
        <span className="text-4xl font-bold text-creamDarker">Chat React</span>
        <span className="text-xl font-semibold text-creamDarker pb-5">
          Log in
        </span>
        <form className="flex flex-col gap-4 justify-center items-center w-full">
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

          <button className=" bg-primary w-1/3 text-text rounded p-2">
            Log in
          </button>
        </form>
        <span className="text-text text-sm mt-2">
          You don't have an account? Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
