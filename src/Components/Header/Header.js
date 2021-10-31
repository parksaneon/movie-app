import React from "react";
import "Header.css";

const Header = () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">Tv</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);

export default Header;
