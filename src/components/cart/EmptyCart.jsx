import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="mt-[15px] text-slate-800 container mx-auto px-20 p-0 text-center text-[23px]">
      <b>Seu carrinho está vázio</b>
      <h2>Procure produtos na nossa loja</h2>
      <Link to={"/"}>
        <button className="mt-[5px] border-solid rounded border-solid border-2 border-[#ffbe5a] bg-[#ffbe5a] text-[white] p-[4px] text-[15px] font-bold">
          Voltar para Loja
        </button>
      </Link>
    </div>
  );
};
