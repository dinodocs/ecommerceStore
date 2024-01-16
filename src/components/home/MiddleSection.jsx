import React from "react";
import { Product } from "./Product";
import { Slides } from "./Slides";
import { ProductTab } from "./ProductTab";
import { useState } from "react";

export const MiddleSection = (props) => {
  const [currentIndex, setIndex] = useState(0);

  const images = [
    { src: "img1.jpg" },
    { src: "img2.jpg" },
    { src: "img3.jpg" },
  ];
  const firstPageProducts = props.products.slice(0, 9);

  const nextSlide = () => {
    if (currentIndex != images.length - 1) {
      setIndex(currentIndex + 1);
    } else setIndex(images.length - 1);
  };
  const prevSlide = () => {
    if (currentIndex != 0) {
      setIndex(currentIndex - 1);
    } else setIndex(0);
  };

  return (
    <div className="xl:container xl:mx-auto">
      <Slides
        image={images[currentIndex].src}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <ProductTab />
      <div className="grid grid-cols-1 gap-3 p-[10px] justify-items-center bg-gradient-to-b from-[#112d4e] to-[#FFFFFF] md:grid-cols-3">
        {firstPageProducts.map((product) => {
          return (
            <Product
              image={product.image}
              title={product.title}
              description={product.description}
              rating={product.rating.rate}
              count={product.rating.count}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};
