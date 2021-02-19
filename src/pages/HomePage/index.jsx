import React from "react";
import { Link } from "react-router-dom";
import envConfig from "@utils/envConfig";
import TestGambar from "../../public/test.png";
import styles from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      Ini Halaman Home {envConfig.HALO}
      <Link to="/about">ke About</Link>
      <Link to="/contact">ke Contact</Link>
      <img src={TestGambar} alt="test gambar" />
    </div>
  );
};

export default HomePage;
