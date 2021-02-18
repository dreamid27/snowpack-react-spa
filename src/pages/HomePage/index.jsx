import React from "react";
import { Link } from "react-router-dom";
import TestGambar from "../../public/test.png";

const HomePage = () => (
  <div>
    Ini Halaman Home
    <Link to="/about">ke About</Link>
    <Link to="/contact">ke Contact</Link>
    <img src={TestGambar} alt="test gambar" />
  </div>
);

export default HomePage;
