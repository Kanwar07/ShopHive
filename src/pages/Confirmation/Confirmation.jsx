"use client";

import Footer from "@/components/Footer";
import React from "react";
import { motion } from "framer-motion";

function Confirmation() {
  return (
    <>
      <div className="w-full h-screen pt-36 px-[10%] bg-custom-gradient max-sm:pt-52">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="uppercase text-[40px] ml-16"
        >
          Thanks for Ordering from us
        </motion.div>
      </div>
    </>
  );
}

export default Confirmation;
