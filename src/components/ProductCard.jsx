import React, { useContext } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContextData } from "@/Context/Context";
import Image from "next/image";
import info from "@/assets/info.png";
import Link from "next/link";

function ProductCard({ product }) {
  const { cartdata, removeCartItems, getcarddata } = useContext(ContextData);

  return (
    <div className="flex flex-col justify-between shadow-custom-lg bg-[#d3d3d3] rounded-2xl h-[400px]">
      <div className="flex w-full justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={180}
          height={180}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[20px]">
          {product.title}
          <Link href="/detail">
            <Image
              src={info}
              alt="info"
              width={20}
              height={20}
              product={product}
            />
          </Link>
        </CardTitle>
      </CardHeader>
      <div className="flex flex-row justify-between">
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-[16px] pr-2">${product.price}</div>
            <div className="text-[#FF0000] text-[14px]">
              {product.discountPercentage}% off
            </div>
          </div>
        </CardContent>
        <div>
          <div className="flex flex-row items-end mx-4">
            {cartdata.filter((data) => data.title === product.title).length >
            0 ? (
              <button
                className="text-[#000000] bg-[#bcbcbc] pt-2 pr-2 pb-2 pl-2 rounded-lg mr-2"
                onClick={() => removeCartItems(product.id)}
              >
                REMOVE
              </button>
            ) : (
              <button
                className="text-[#000000] bg-[#bcbcbc] pt-2 pr-2 pb-2 pl-2 rounded-lg mr-2"
                onClick={() => getcarddata(product.id, product.price)}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
