import React from "react";
// import ShoppingCart from "./ShoppingCart";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "./Navbar.css";
//npm i @material-ui/core
// npm i @material-ui/icons
const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="language">EN</div>

          <div className="search-container">
            <div className="input">
              <input placeholder="Search" />
            </div>

            {/* inline styling */}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <div className="logo">FLORgeous.</div>
        </div>
        <div className="right">
          <div className="menu-item">Register</div>
          <div className="menu-item">Sign In</div>
          <div className="menu-item">
          <Badge badgeContent={4} color="primary">
            <ShoppingCart />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
