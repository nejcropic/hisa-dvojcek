// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Galerija.css";

const GalerijaGallery = ({ item, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="single-wrapper galerija-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="single-container galerija"
      >
        <img src={item.image} alt={item.title} onClick={onClick} />
      </motion.div>
    </div>
  );
};

export default GalerijaGallery;
