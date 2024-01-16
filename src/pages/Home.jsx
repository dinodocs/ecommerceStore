import React from "react";
import { MiddleSection } from "../components/home/MiddleSection";

export const Home = (props) => {
  return <MiddleSection products={props.products} />;
};
