import React from "react";
import keeps from "./assets/keep.png";

import navbar from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <section className={navbar.navbar}>
      <div className={navbar.logo}>
        <img src={keeps} alt="keeps" />
        <h4>Keeps</h4>
      </div>
      <div className={navbar.author}>Rishikesh K M</div>
    </section>
  );
}
