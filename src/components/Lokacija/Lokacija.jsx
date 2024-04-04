// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Lokacija.css";
import { LokacijaImg } from "../../index";

const Lokacija = ({ refs }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="lokacija-wrapper" ref={refs.lokacijaRef}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="lokacija-container"
      >
        <hr />
        <h1>Lokacija</h1>

        <div className="lokacija-text">
          <div className="lokacija-text-divider">
            <Link to="https://maps.app.goo.gl/rJU7BWFZhmkSk3c37">
              <h4>
                <i class="fas fa-map-marker-alt"></i> Breznikova cesta 62a
              </h4>
            </Link>
            <p>
              Lokacija dvojčka je izjemna, saj je v bližini šola, vrtec,
              trgovina in avtobusna postaja. Hiter dostop do obvoznice in
              bližina centra Domžal (samo 5 minut vožnje) pa vam omogočata
              enostaven in udoben dostop do vseh potrebnih storitev.
            </p>
          </div>
          <Link to="https://maps.app.goo.gl/rJU7BWFZhmkSk3c37">
            <img src={LokacijaImg} alt="" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Lokacija;
