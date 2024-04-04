// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Galerija.css";

const GalerijaEnote = ({ item, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="single-wrapper">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="single-container"
      >
        <hr />
        <div className="single-text">
          <div className="single-text-divider">
            <h4>
              {/* <i class={item.icon}></i> */}
              {item.title}
            </h4>
            <p>{item.besedilo1}</p>
            <p>
              {item.besedilo2}
              <sup>2</sup>
            </p>
            <p>
              {item.besedilo3}
              <sup>2</sup> (P-1-M)
            </p>
            <p>
              {item.besedilo4}
              <sup>2</sup>
            </p>
            <p>
              {item.besedilo5}
              <sup>2</sup>
            </p>
            <p>
              {item.besedilo6}
              <sup>2</sup>
            </p>
          </div>
          <img src={item.image} alt={item.title} onClick={() => onClick(0)} />
        </div>
      </motion.div>
    </div>
  );
};

export default GalerijaEnote;
