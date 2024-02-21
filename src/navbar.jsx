import React, { memo, useState } from "react";
import "./navbar.css";

export const Navbar = memo((props) => {
  console.log("Navbar rendered");
  const [active, setActive] = useState("Uz");

  const handleClick = (e) => {
    const lan = document.querySelector(".lan");
    lan.setAttribute("style", "--active: " + getNum(e.target.innerText));
    setActive(e.target.innerText);
  };

  return (
    <div className="navbar">
      <p>Logo</p>

      <div className="lan">
        <strong></strong>
        <button
          onClick={handleClick}
          className={active === "Uz" ? "active" : ""}
        >
          Uz
        </button>
        <button
          onClick={handleClick}
          className={active === "En" ? "active" : ""}
        >
          En
        </button>
        <button
          onClick={handleClick}
          className={active === "Ru" ? "active" : ""}
        >
          Ru
        </button>
      </div>
      <p>{props.lan}</p>
    </div>
  );
});

function getNum(data) {
  if (data === "Uz") return 0;
  if (data === "En") return 1;
  if (data === "Ru") return 2;
  else return 0;
}
