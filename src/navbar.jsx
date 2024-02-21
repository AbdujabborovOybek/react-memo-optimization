import React, { memo } from "react";
import "./navbar.css";

export const Navbar = memo((props) => {
  console.log("Navbar rendered");
  return (
    <div className="navbar">
      <p>Logo</p>

      <p>{props.lan}</p>
    </div>
  );
  
});
