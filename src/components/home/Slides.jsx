import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

export const Slides = (props) => {
  return (
    <div className="m-auto relative mb-0">
      <img
        className="object-cover max-h-[600px] object-center h-full w-full"
        src={props.image}
      />
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={props.prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={props.nextSlide} size={30} />
      </div>
    </div>
  );
};
