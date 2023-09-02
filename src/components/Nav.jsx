import React from "react";

import "../App.css";

const Nav = () => {
  return (
    <nav>
      <img className="logo" src="/Logo.svg" alt="Little Lemon" />
      <ul className="nav-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
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
