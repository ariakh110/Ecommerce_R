import React from "react";

import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Head></Head>
      <Search></Search>
      <Navbar></Navbar>
    </>
  );
};

export default Header;
