import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    Ini Halaman About
    <Link to="/contact">ke contact</Link>
    <Link to="/">ke Home</Link>
  </div>
);

export default AboutPage;
