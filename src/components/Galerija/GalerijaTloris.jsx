// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Galerija.css";

const GalerijaTlorisTemp = ({ item, onClick }) => {
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
        className="single-container tloris-container"
      >
        {/* <h4>
          <i class={item.icon}></i> {item.title}
        </h4> */}
        <hr />
        <div className="single-text tloris">
          <h4>{item.opis}</h4>
          <div className="tloris-divider">
            <img
              src={item.image1}
              alt={item.title}
              onClick={() => onClick(0)}
            />
            <img
              src={item.image2}
              alt={item.title}
              onClick={() => onClick(1)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GalerijaTlorisTemp;
