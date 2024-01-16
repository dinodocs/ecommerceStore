import React from "react";
import { ProductDetail } from "../components/products/ProductDetail";
import { useParams } from "react-router-dom";

export const ProductPage = (props) => {
  const { id } = useParams();
  return (
    <ProductDetail
      id={id}
      products={props.products}
      setCartItems={props.setCartItems}
    />
  );
};
