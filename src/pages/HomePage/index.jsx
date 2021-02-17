import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    Ini Halaman Home
    <Link to="/about">ke About</Link>
    <Link to="/contact">ke Contact</Link>
  </div>
);

export default HomePage;
