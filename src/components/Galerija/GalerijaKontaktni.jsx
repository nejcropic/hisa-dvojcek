// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Galerija.css";

const GalerijaKontaktni = ({ item, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="single-wrapper kontaktni-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="single-container"
      >
        <hr />
        <h1>
          <i class={item.icon}></i> {item.title}
        </h1>
        <div className="single-text kontaktni-text">
          <p>{item.firma}</p>
          <a href={item.mailto}>
            <p>{item.mail}</p>
          </a>
          <a href={item.tel}>
            <p>{item.gsm}</p>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GalerijaKontaktni;
