import React, { useState, useEffect } from "react";
import "./ScrollDownButton.css";
import { motion } from "framer-motion";
import { MeniButtonAnimation } from "../animations.jsx";

function ScrollDownButton() {
  const [showButton, setButton] = useState(false);
  const targetPosition = window.innerHeight;

  useEffect(() => {
    const hideButton = () => {
      // Show button when user has scrolled down 100px (for example) from the top of the document
      if (window.scrollY < 1) {
        setButton(false);
      } else if ((window.scrollY > 1) & (window.scrollY < targetPosition)) {
        setButton(true);
      } else {
        setButton(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", hideButton);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", hideButton);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <motion.div
      variants={MeniButtonAnimation}
      initial="hidden"
      animate={showButton ? "show" : "hidden"}
      className={
        showButton ? "scrollDownBtnSlider show" : "scrollDownBtnSlider hide"
      }
    >
      <button onClick={handleScrollDown}>
        <i className="fas fa-arrow-down"></i>
      </button>
    </motion.div>
  );
}

export default ScrollDownButton;
