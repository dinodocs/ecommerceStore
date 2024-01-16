import React from "react";
import { EmptyCart } from "../components/cart/EmptyCart";
import { CiStar } from "react-icons/ci";

// Acessando os itens do carrinho
export const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const count = {};
  // contando quantos itens repetidos temos no carrinho
  cart.forEach((product) => {
    count[product.id] = (count[product.id] || 0) + 1;
    console.log(count);
  });

  const cartIndividual = [...new Set(cart)];
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const fix = totalPrice.toFixed(2);
  console.log(cartIndividual);
  console.log(cartIndividual.length);

  if (cartIndividual.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="xl:container xl:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {cartIndividual.map((product) => {
            return (
              <div className="grid grid-cols-1 text-[25px] justify-items-center text-gray-900 bg-white mt-[30px] p-[30px] rounded md:grid-cols-2">
                <div>
                  <img src={product.image} className="w-[100px]" />
                </div>
                <div className="ml-[30px]">
                  <h1 className="font-semibold">{product.title}</h1>
                  <h2>Preço: R${product.price}</h2>
                  <h2>Quantidade: {count[product.id]}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="ml-[30px] text-[30px] text-gray-900 bg-white mt-[30px] p-[30px] h-[250px] rounded">
          <h1 className="font-bold">Total:</h1>
          <p>R${fix}</p>
          <button
            className="shadow-md rounded border-solid border-2 border-[#ffbe5a] bg-[#ffbe5a] text-[white] p-[3px] text-[20px] font-bold
              mt-[25px]"
          >
            Confirmar Compra
          </button>
        </div>
      </div>
    </div>
  );
};
