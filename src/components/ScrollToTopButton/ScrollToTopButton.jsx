import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { motion } from "framer-motion";
import { MeniButtonAnimation } from "../animations.jsx";

function ScrollToTopButton() {
  const [showButton, setButton] = useState(false);

  useEffect(() => {
    const hideButton = () => {
      // Show button when user has scrolled down 100px (for example) from the top of the document
      if (window.scrollY > 100) {
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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      variants={MeniButtonAnimation}
      initial="hidden"
      animate={showButton ? "show" : "hidden"}
      className={showButton ? "scrollBtnSlider show" : "scrollBtnSlider hide"}
    >
      <button onClick={handleScrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </motion.div>
  );
}

export default ScrollToTopButton;
