import React, { useState } from "react";

import "../App.css";

const Nav = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className={isOpen ? "open" : ""}>
        <a href="/">
      <img className="logo" src="/Logo.svg" alt="Little Lemon" />
          </a>
      <div className={isOpen ? "hamburger-menu menu" : "hamburger-menu"} onClick={() => setIsopen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
