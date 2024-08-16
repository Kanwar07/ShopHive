"use client";

import React, { useContext } from "react";
import { ContextData } from "@/Context/Context";
import CartCard from "@/components/CartCard";
import Footer from "@/components/Footer";
import CartTotal from "./sections/CartTotal";

function CartPage() {
  const { cartdata } = useContext(ContextData);

  return (
    <>
      <div className="flex flex-col pt-28 px-[10%] bg-custom-gradient h-full">
        <div className="flex flex-row justify-around my-4 max-md:flex-col">
          <div className="flex-1 grid grid-col-1 gap-4 px-4 mb-10">
            {cartdata.length !== 0 ? (
              cartdata.map((cart, index) => {
                return (
                  <div key={index}>
                    <CartCard product={cart} />
                  </div>
                );
              })
            ) : (
              <div>Kindly add products from products page</div>
            )}
          </div>
          <div className="flex-1">
            <CartTotal />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
