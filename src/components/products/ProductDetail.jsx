import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../home/Product";
import { CiStar } from "react-icons/ci";

export const ProductDetail = (props) => {
  const id = props.id;
  const products = props.products;
  const cart = props.setCartItems;
  const product = products.find((product) => product.id == id);

  const addToCart = () => {
    cart.push(product);
  };
  return (
    <div className="xl:container xl:mx-auto xl:mt-[20px]">
      <div className="grid grid-cols-1 border-solid border-[1px] border-[#dcdcdc] divide-x bg-[white] h-[100%] pb-[20px] pt-4 pb-4 md:grid-cols-2">
        <div className="mx-auto">
          <img src={product.image} alt="" className="width-[100%] h-[300px]" />
        </div>
        <div className="grid grid-rows-1 divide-y w-[100%] p-[10px]">
          <div>
            <h1 className="font-bold text-[30px]">{product.title}</h1>
          </div>
          <div>
            <h2 className="flex items-center text-[15px]">
              {product.rating.rate} <CiStar size={9} />
              {product.rating.count} Reviews
            </h2>
          </div>
          <div>
            <p className="font-bold text-[#ffbe5a] text-[30px]">
              ${product.price}
            </p>
          </div>
          <div>
            <p className="text-[20px] mr-8">{product.description}</p>
          </div>
          <div className="flex items-center justify-center ">
            <button className="shadow-md border-solid border-2 rounded-l-lg border-[#112d4e] p-[3px] text-[20px] text-[#112d4e] font-bold mt-[25px]">
              COMPRAR
            </button>
            <button
              onClick={addToCart}
              className="shadow-md rounded-r-lg border-solid border-2 border-[#ffbe5a] bg-[#ffbe5a] text-[white] p-[3px] text-[20px] font-bold
              mt-[25px]"
            >
              CARRINHO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
