"use client";

import React, { useContext } from "react";
import { ContextData } from "@/Context/Context";
import Link from "next/link";
import toast from "react-hot-toast";

function RegisterCard() {
  const {
    username,
    setusername,
    password,
    setpassword,
    confirmpassword,
    setconfirmpassword,
  } = useContext(ContextData);

  const register = () => {
    if (validate()) {
      window.location.href = "/login";
      setusername("");
      setpassword("");
      setconfirmpassword("");
    } else {
      setusername("");
      setpassword("");
      setconfirmpassword("");
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
    } else if (password !== confirmpassword) {
      toast.error("Password do not match");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-[#d3d3d3] bg-opacity-60 text-[#00000] flex flex-col py-8 px-[10%] w-min rounded-3xl -mt-32 -mb-14">
      <div className="pb-6 text-[30px]">Register</div>
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
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <div className="pb-4">
        <input
          type="password"
          className="bg-[#ffffff] py-2 px-4 border border-[#000000] rounded-xl bg-opacity-10 text-[#00000] placeholder:text-[#000000] placeholder:opacity-50"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => {
            setconfirmpassword(e.target.value);
          }}
        />
      </div>
      <button
        className="mb-4 pt-2 pr-2 pb-2 pl-2 hover:border hover:rounded-xl hover:shadow-2xl"
        onClick={register}
      >
        REGISTER
      </button>
      <div className="flex flex-row justify-around pb-6">
        <div>Already have a account?</div>
        <Link href="/login">
          <div className="text-[#5b5b5b]">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default RegisterCard;
