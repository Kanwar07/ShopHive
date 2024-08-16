"use client";

import React, { useContext } from "react";
import { ContextData } from "@/Context/Context";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

function ProductsPage() {
  const { products } = useContext(ContextData);

  return (
    <div className="h-full bg-custom-gradient">
      <div className="w-screen flex flex-col justify-between h-full pt-28 pb-6 px-[10%]">
        {products.length !== 0 ? (
          <div className="grid grid-cols-3 gap-4 p-4 w-[100%] pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
            {products.length !== 0 &&
              products.map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard product={product} />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            Loading...
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
