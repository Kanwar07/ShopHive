import Image from "next/image";
import React from "react";
import shopping from "../../../assets/shopping.avif";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-custom-gradient w-screen h-full flex flex-row justify-around gap-8 items-center pt-44 px-[10%] max-lg:flex-col">
      <div className="flex flex-col gap-8 items-start my-10">
        <h1 className="text-[#000000] text-[46px]">Welcome to ShopHive</h1>
        <p>Your One-Stop Shop for Everything You Love. Explore Now!</p>
        <Link href="/products">
          <button className="border border-[#000000] px-4 py-2 rounded-xl shadow-none hover:shadow-custom-lg">
            Explore
          </button>
        </Link>
      </div>
      <div className="w-[30rem] h-[30rem] max-md:w-[20rem] max-md:h-[20rem] max-lg:w-[25rem] max-lg:h-[25rem]">
        <Image
          src={shopping}
          alt="shopping"
          className="rounded-xl transition ease-in-out delay-50 duration-500 shadow-xl hover:scale-110 hover:bg-black hover:shadow-custom-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;
