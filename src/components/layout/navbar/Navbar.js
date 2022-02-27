import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content-mobile">
        <ul className="navi-list-mobile">
          <li>
            <a href="/">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/watchlist">
              <i className="fa-thin fa-circle-bookmark"></i>
              <p>Watchlist</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Explore</p>
            </a>
          </li>
        </ul>
      </div>
      <ul className="navi-list">
        <li className="text-nav">
          <a className="nav-links" href="/">
            Home
          </a>
        </li>
        <li className="text-nav">
          <a className="nav-links" href="/categories">
            Categories
          </a>
        </li>
        <li>
          <a>
            <img src={logo} alt="Logo" style={{ width: "min(50vw, 200px)" }} />
          </a>
        </li>
        <li className="text-watch">
          <a className="nav-links" href="/watchlist">
            Watchlist
          </a>
        </li>
        <li className="text-contact">
          <a className="nav-links" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
