// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Galerija.css";

const GalerijaBasic = ({ item, onClick }) => {
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
            <p>{item.besedilo}</p>
          </div>
          <img src={item.image} alt={item.title} onClick={onClick} />
        </div>
      </motion.div>
    </div>
  );
};

export default GalerijaBasic;
