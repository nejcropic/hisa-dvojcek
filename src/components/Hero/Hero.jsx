import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VideoKomp, VideoPhone } from "../../index";

function Hero() {
  const getData = () => (window.innerWidth <= 1000 ? VideoPhone : VideoKomp);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <>
      <div className="hero-container">
        <img src={getData()} alt="" /> {/* Zamenjaj z videom */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
          className="title-wrapper"
        >
          <div className="title-container">
            <h1>
              Hiša <br /> dvojček
            </h1>
            <h3>Ihan, Domžale</h3>
          </div>
          {/* <div className="title-container">
            <h4>Ihan</h4>
            <h4>Domžale</h4>
          </div> */}
          <div className="details-container">
            <div className="detail-prop detail-big">
              <i class="fa-solid fa-tag"></i>
              <h3>Od 390.000,00€</h3>
            </div>
            <div className="detail-prop">
              <i class="fa-solid fa-calendar-days"></i>
              <h4>Leto izgradnje: 2023</h4>
            </div>

            <div className="detail-prop">
              <i class="fa-solid fa-table-cells"></i>
              <h4>
                176,9m<sup>2</sup> + K
              </h4>
            </div>
            <div className="detail-prop">
              <i class="fa-solid fa-house"></i>
              <h4>Bližina šole in vrtca</h4>
            </div>
            <div className="detail-prop">
              <i class="fa-solid fa-layer-group"></i>
              <h4>K + P + 1 + M</h4>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default Hero;
