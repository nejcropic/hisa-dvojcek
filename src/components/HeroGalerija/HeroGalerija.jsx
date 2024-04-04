import React, { useState, useEffect } from "react";
import "./HeroGalerija.css";
import { GalerijaItems } from "../Galerija/GalerijaItems"; // Adjust the import path as needed

function HeroGalerija() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!openModal) {
      // Only set the timer if the modal is not open
      const timer = setInterval(() => {
        goToNext();
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(timer);
    }
  }, [currentIndex, openModal]); // Depend on `openModal` state as well to re-evaluate the effect when it changes

  const goToNext = () => {
    const isLastImage = currentIndex === GalerijaItems.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? GalerijaItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Checks if the click is directly on the overlay, not on child elements
      setOpenModal(false);
    }
  };

  return (
    <>
      {openModal && (
        <div className="slider-container" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close, Previous, and Next buttons here */}
            <i
              className="fas fa-chevron-left btnPrev"
              onClick={goToPrevious}
            ></i>
            <i className="fas fa-chevron-right btnNext" onClick={goToNext}></i>
            <i className="fas fa-times btnClose" onClick={handleCloseModal}></i>
            {/* Image Display */}
            <div className="fullScreenImage">
              <img
                src={GalerijaItems[currentIndex].image}
                alt={GalerijaItems[currentIndex].title}
              />
              <p>{GalerijaItems[currentIndex].title}</p>
            </div>
          </div>
        </div>
      )}
      <div className="hero-galerija-container" onClick={handleOpenModal}>
        <h3>Galerija</h3>
        <img
          src={GalerijaItems[currentIndex].image}
          alt={GalerijaItems[currentIndex].title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}

export default HeroGalerija;
