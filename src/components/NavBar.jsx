import React from "react";
import "./NavBar.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-center h-[90px] w-full bg-white">
      <div className="flex items-center px-2 justify-evenly gap-[10px] w-[100%] h-[90px]">
        <Link to={"/"}>
          <img src="/logo.png" className="max-w-[50px] " />
        </Link>
        <input className="searchBar" placeholder="Busque Aqui"></input>
        <div className="hidden text-[#112d4e] text-[12px] ml-[20px] md:grid">
          <p>Olá, NOME DA CONTA</p>
          <b>Configurações</b>
        </div>
        <IconContext.Provider
          value={{
            color: "#112d4e",
            className: "global-class-name ml-[10px] md:hidden",
            size: "20px",
          }}
        >
          <div>
            <FaUser />
          </div>
        </IconContext.Provider>

        <Link to={"/cart"}>
          <div className="ml-[20px]">
            <img src="/cart.png" className="min-w-[30px] h-[30px] invert" />
          </div>
        </Link>
      </div>
    </nav>
  );
};
