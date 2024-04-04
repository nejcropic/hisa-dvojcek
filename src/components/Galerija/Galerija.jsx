import React, { useState } from "react";

import "./Galerija.css";
import GalerijaBasic from "./GalerijaBasic";
import GalerijaEnoteTemp from "./GalerijaEnote";
import GalerijaKontaktniTemp from "./GalerijaKontaktni";
import GalerijaTlorisTemp from "./GalerijaTloris";
import GalerijaFasadaTemp from "./GalerijaFasada";
import {
  GalerijaEnote,
  GalerijaFasada,
  GalerijaGalleryImages,
  GalerijaItems,
  GalerijaKontaktni,
  GalerijaStreha,
  GalerijaTloris,
  GalerijaUvod,
  GalerijaZunanja,
} from "./GalerijaItems";
import GalerijaZunanjaTemp from "./GalerijaZunanja";
import GalerijaStrehaTemp from "./GalerijaStreha";
import GalerijaGallery from "./GalerijaGallery";

const Galerija = ({ refs }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const uvod = 0;
  const enote = 1;
  const tloris = 3;
  const fasada = 10;
  const zunanja = 12;
  const streha = 16;

  const handleGalleryModal = (num, index, subindex) => {
    var vsota = 0;
    vsota = num + index + subindex;
    setSlideNumber(vsota);
    setOpenGalleryModal(true);
  };
  const handleOpenModal = (num, index, subindex) => {
    var vsota = 0;
    vsota = num + index + subindex;
    setSlideNumber(vsota);
    setOpenModal(true);
  };
  const handleOpenTloris = (num, index, subindex) => {
    var vsota = 0;
    vsota = num + index + subindex;
    var i = 4;
    for (i; i < 8; i++) {
      if ((vsota === i) & (subindex == 0)) {
        vsota = vsota + i - 3;
        break;
      }
      if ((vsota === i + 1) & (subindex == 1)) {
        vsota = vsota + i - 3;
        break;
      }
    }
    /* if ((vsota === 4) & (subindex === 0)) {
      vsota = vsota + 1;
    } else if ((vsota === 5) & (subindex === 1)) {
      vsota = vsota + 1;
    } else if ((vsota === 5) & (subindex === 0)) {
      vsota = vsota + 2;
    } else if ((vsota === 6) & (subindex === 1)) {
      vsota = vsota + 2;
    } else if ((vsota === 6) & (subindex === 0)) {
      vsota = vsota + 3;
    } else if ((vsota === 7) & (subindex === 1)) {
      vsota = vsota + 3;
    } */
    setSlideNumber(vsota);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseGalleryModal = () => {
    setOpenGalleryModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(GalerijaItems.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === GalerijaItems.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Checks if the click is directly on the overlay, not on child elements
      handleCloseModal();
    }
  };
  const handleOverlayGalleryClick = (e) => {
    if (e.target === e.currentTarget) {
      // Checks if the click is directly on the overlay, not on child elements
      handleCloseGalleryModal();
    }
  };

  return (
    <>
      <div className="galerija-wrapper">
        {openModal && (
          <div className="slider-container" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close, Previous, and Next buttons here */}
              <i
                className="fas fa-chevron-left btnPrev"
                onClick={prevSlide}
              ></i>
              <i
                className="fas fa-chevron-right btnNext"
                onClick={nextSlide}
              ></i>
              <i
                className="fas fa-times btnClose"
                onClick={handleCloseModal}
              ></i>
              {/* Image Display */}
              <div className="fullScreenImage">
                <img
                  src={GalerijaItems[slideNumber].image}
                  alt={GalerijaItems[slideNumber].title}
                />
                <p>{GalerijaItems[slideNumber].title}</p>
              </div>
            </div>
          </div>
        )}
        {openGalleryModal && (
          <div className="slider-container" onClick={handleOverlayGalleryClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close, Previous, and Next buttons here */}
              <i
                className="fas fa-chevron-left btnPrev"
                onClick={prevSlide}
              ></i>
              <i
                className="fas fa-chevron-right btnNext"
                onClick={nextSlide}
              ></i>
              <i
                className="fas fa-times btnClose"
                onClick={handleCloseGalleryModal}
              ></i>
              {/* Image Display */}
              <div className="fullScreenImage">
                <img
                  src={GalerijaGalleryImages[slideNumber].image}
                  alt={GalerijaGalleryImages[slideNumber].title}
                />
                <p>{GalerijaGalleryImages[slideNumber].title}</p>
              </div>
            </div>
          </div>
        )}

        <div className="home-wrapper second" ref={refs.prvaRef}>
          <h1>
            <i class="fa-solid fa-building"></i> Prodaja nepremičnine
          </h1>
          {GalerijaUvod.map((item, index) => (
            <GalerijaBasic
              key={index}
              item={item}
              onClick={() => handleOpenModal(uvod, index, 0)}
            />
          ))}
        </div>
        <div className="home-wrapper first" ref={refs.enoteRef}>
          <h1>
            <i class="fa-solid fa-house"></i> Enote
          </h1>
          {GalerijaEnote.map((item, index) => (
            <GalerijaEnoteTemp
              key={index}
              item={item}
              onClick={(subindex) => handleOpenModal(enote, index, subindex)}
            />
          ))}
        </div>
        <div className="home-wrapper second" ref={refs.tlorisRef}>
          <h1>
            <i className="fa-solid fa-map"></i> Tloris
          </h1>
          <div className="tloris-text">
            <p>
              Enota je zasnovana v smeri, da si kupec lahko tloris prilagodi čim
              bolj svojim potrebam in željam. Vse etaže so odprte in dopuščajo
              maksimalne prilagoditve. Tlorisi na spodnjih slikah so le ena
              izmed možnih postavitev.
            </p>
          </div>
          {GalerijaTloris.map((item, index) => (
            <GalerijaTlorisTemp
              key={index}
              item={item}
              onClick={(subindex) => handleOpenTloris(tloris, index, subindex)}
            />
          ))}
        </div>
        <div
          className="home-wrapper  first"
          style={{ height: "${GalerijaFasada.length}*100svh" }}
          ref={refs.fasadaRef}
        >
          <h1>Fasada in zunanje stavbno pohištvo</h1>
          {GalerijaFasada.map((item, index) => (
            <GalerijaFasadaTemp
              key={index}
              item={item}
              onClick={(subindex) => handleOpenModal(fasada, index, subindex)}
            />
          ))}
        </div>
        <div className="home-wrapper second" ref={refs.okolicaRef}>
          <h1>
            <i class="fa-solid fa-tree"></i> Zunanja okolica
          </h1>
          {GalerijaZunanja.map((item, index) => (
            <GalerijaZunanjaTemp
              key={index}
              item={item}
              onClick={(subindex) => handleOpenModal(zunanja, index, subindex)}
            />
          ))}
        </div>
        <div className="home-wrapper first" ref={refs.strehaRef}>
          <h1>
            <i class="fa-solid fa-stairs"></i> Streha
          </h1>
          {GalerijaStreha.map((item, index) => (
            <GalerijaStrehaTemp
              key={index}
              item={item}
              onClick={(subindex) => handleOpenModal(streha, index, subindex)}
            />
          ))}
        </div>
        <div className="home-wrapper  second" ref={refs.kontaktniRef}>
          <h1>Kontaktni podatki</h1>
          <div className="kontaktni-wrapper">
            {GalerijaKontaktni.map((item, index) => (
              <GalerijaKontaktniTemp key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="home-wrapper  first" ref={refs.galerijaRef}>
          <h1>Galerija</h1>
          <div className="gallery-wrapper">
            {GalerijaGalleryImages.map((item, index) => (
              <GalerijaGallery
                key={index}
                item={item}
                onClick={() => handleGalleryModal(uvod, index, 0)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galerija;
