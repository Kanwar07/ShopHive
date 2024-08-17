"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ContextData } from "@/Context/Context";
import shoppinglogo from "@/assets/shoppinglogo.png";
import Image from "next/image";

function NavBar() {
  const { cartquantity } = useContext(ContextData);

  return (
    <nav className="w-screen flex flex-row py-8 justify-around items-center rounded-b-lg shadow-custom-lg max-sm:flex-col">
      <Link href="/">
        <div className="flex flex-row items-end max-sm:mb-4">
          <Image
            src={shoppinglogo}
            alt="shoppinglogo"
            width={28}
            height={28}
            className="mr-2"
          />
          <button>ShopHive</button>
        </div>
      </Link>
      <div className="flex flex-row justify-between gap-2 max-sm:gap-8">
        <Link href="/products">
          <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
            Products
          </div>
        </Link>
        <Link href="/cart">
          <div className="relative">
            <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
              Cart
            </div>
            <div className="absolute -top-3 -right-3">{cartquantity}</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-2 max-sm:gap-8">
        <Link href="/register">
          <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
            Register
          </div>
        </Link>
        <Link href="/login">
          <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
            Login
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
