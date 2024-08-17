import RegisterCard from "@/components/RegisterCard";
import shopping from "../../assets/shopping.avif";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

function RegisterPage() {
  return (
    <>
      <div className="bg-custom-gradient w-screen h-full flex flex-row justify-around gap-8 items-center pt-44 px-[10%] max-lg:flex-row max-md:flex-col max-md:pt-64">
        <RegisterCard />
        <div className="w-[30rem] h-[30rem] max-lg:w-[25rem] max-lg:h-[25rem] max-md:w-[20rem] max-md:h-[20rem] max-md:mt-10">
          <Image
            src={shopping}
            alt="shopping"
            className="rounded-xl transition ease-in-out delay-50 duration-500 shadow-xl hover:scale-110 hover:bg-black hover:shadow-custom-lg"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default RegisterPage;
