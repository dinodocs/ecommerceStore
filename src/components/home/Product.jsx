import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <Link
      to={`/product/${props.id}`}
      className="flex container shadow-lg rounded box-content bg-white border-solid border border-transparent hover:border-[#ffbe5a]"
    >
      <div className="flex container shadow-lg rounded box-content bg-white border-solid border border-transparent ">
        <div className="flex w-1/2 items-center justify-center ">
          <img src={props.image} className="w-[50%] p-2"></img>
        </div>
        <div className="w-1/2 m-2">
          <h1 className="text-gray-900 text-[15px] text-ellipsis overflow-hidden line-clamp-2 font-semibold">
            {props.title}
          </h1>
          <p className="text-gray-800 text-[13px] text-ellipsis overflow-hidden line-clamp-2">
            {props.description}
          </p>
          <p className="text-gray-600 text-[11px] text-ellipsis overflow-hidden line-clamp-3">
            Rating: {props.rating} Count: {props.count}
          </p>
          <p>{props.price}</p>
        </div>
      </div>
    </Link>
  );
};
