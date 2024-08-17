import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

function DetailPage({ product }) {
  const {
    title,
    description,
    category,
    price,
    stock,
    tags,
    brand,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    images,
    thumbnail,
  } = product;

  console.log(product);

  const tagsArray = Object.values(tags);
  const dimensionsArray = Object.values(dimensions);
  const reviewsArray = Object.values(reviews);

  return (
    <>
      <div className="h-full bg-custom-gradient">
        <div>
          <Image src={thumbnail} alt={title} width={200} height={300} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
