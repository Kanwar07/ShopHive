"use client";

import { ContextData } from "@/Context/Context";
import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";

function LoginCard() {
  const { username, setusername, password, setpassword } =
    useContext(ContextData);

  const login = () => {
    if (validate()) {
      window.location.href = "/products";
      setusername("");
      setpassword("");
    } else {
      setusername("");
      setpassword("");
    }
  };

  const validate = () => {
    if (username === "") {
      toast.error("Username cannot be empty!");
      return false;
    } else if (username.length < 6) {
      toast.error("Username must be at least 6 characters");
      return false;
    } else if (password === "") {
      toast.error("Password cannot be empty!");
      return false;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-[#d3d3d3] bg-opacity-60 text-[#00000] flex flex-col py-8 px-[10%] w-min rounded-3xl -mt-32 -mb-14">
      <div className="pb-6 text-[30px]">Log In</div>
      <div className="pb-4">
        <input
          type="text"
          className="bg-[#ffffff] py-2 px-4 border border-[#000000] rounded-xl bg-opacity-10 text-[#00000] placeholder:text-[#000000] placeholder:opacity-50"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </div>
      <div className="pb-4">
        <input
          type="password"
          className="bg-[#ffffff] py-2 px-4 border border-[#000000] rounded-xl bg-opacity-10 text-[#00000] placeholder:text-[#000000] placeholder:opacity-50"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <button
        onClick={login}
        className="my-2 pt-2 pr-2 pb-2 pl-2 hover:border rounded-xl hover:shadow-2xl"
      >
        Log In
      </button>
      <div className="flex flex-wrap pb-6">
        <div>Already have a account?</div>
        <Link href="/register">
          <div className="text-[#5b5b5b]">Register</div>
        </Link>
      </div>
    </div>
  );
}

export default LoginCard;
