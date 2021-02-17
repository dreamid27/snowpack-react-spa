import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h2>Ini halaman about bro</h2>
    <Link to="/contact">ke contact</Link>
    <Link to="/">ke Home</Link>
  </div>
);

export default AboutPage;
