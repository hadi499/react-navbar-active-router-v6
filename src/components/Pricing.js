import React from "react";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    const navbarNav = document.querySelector("#navbarNav");
    const links = document.querySelectorAll(".nav-link");
    navbarNav.addEventListener("click", function (e) {
      links.forEach((e) => {
        e.className = "nav-link";
      });
      e.target.classList.add("active");
    });
  });
  return (
    <div className="container">
      <h3>Pricing</h3>
    </div>
  );
}

export default Pricing;
