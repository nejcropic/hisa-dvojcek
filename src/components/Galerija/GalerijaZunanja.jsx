// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Galerija.css";

const GalerijaZunanjaTemp = ({ item, onClick }) => {
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
          <div className="single-text-divider zunanja">
            <p>{item.besedilo}</p>
          </div>
          <div className="image-divider">
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
          <div className="image-divider">
            <img
              src={item.image3}
              alt={item.title}
              onClick={() => onClick(2)}
            />
            <img
              src={item.image4}
              alt={item.title}
              onClick={() => onClick(3)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GalerijaZunanjaTemp;
