import React, { useRef } from "react";
import "../components/Home/Home.css";
import { ScrollProvider } from "../components/ScrollContext";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Footer from "../components/Footer/Footer";
import Galerija from "../components/Galerija/Galerija";
import Lokacija from "../components/Lokacija/Lokacija";
import ScrollDownButton from "../components/ScrollDownButton/ScrollDownButton";

function Home() {
  const prvaRef = useRef(null);
  const enoteRef = useRef(null);
  const kontaktniRef = useRef(null);
  const tlorisRef = useRef(null);
  const fasadaRef = useRef(null);
  const okolicaRef = useRef(null);
  const strehaRef = useRef(null);
  const galerijaRef = useRef(null);
  const lokacijaRef = useRef(null);

  return (
    <ScrollProvider>
      <NavBar
        refs={{
          prvaRef,
          enoteRef,
          kontaktniRef,
          tlorisRef,
          fasadaRef,
          okolicaRef,
          strehaRef,
          lokacijaRef,
          galerijaRef,
        }}
      />
      <Hero />
      <div className="home-wrapper"></div>
      <ScrollDownButton />
      <ScrollToTopButton />
      <Galerija
        refs={{
          prvaRef,
          enoteRef,
          kontaktniRef,
          tlorisRef,
          fasadaRef,
          okolicaRef,
          strehaRef,
          galerijaRef,
        }}
      />
      <Lokacija refs={{ lokacijaRef }} />
      <Footer />
    </ScrollProvider>
  );
}

export default Home;
