import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Logo from "./images/logo.png";
import VideoKomp from "./images/hisadvojcekkomp.jpg";
import VideoPhone from "./images/hisadvojcekphone.jpg";
import LokacijaImg from "./images/lokacija.png";
import PrvaSlika from "./images/hisadvojcek.jpg";
/* enote */
import LevaEnota from "./images/hisadvojcek3.jpg";
import DesnaEnota from "./images/hisadvojcek6.jpg";
/* tloris */
import Klet1 from "./images/NacrtKlet.jpg";
import Klet2 from "./images/klet.jpg";
import Pritličje1 from "./images/NacrtPritlicje.jpg";
import Pritličje2 from "./images/hisadvojcek10.jpg";
import Nadstropje1 from "./images/NacrtNadstropje.jpg";
import Nadstropje2 from "./images/hisadvojcek13.jpg";
import Mansarda1 from "./images/NacrtMansarda.jpg";
import Mansarda2 from "./images/hisadvojcek11.jpg";
/* fasada */
import Fasada from "./images/hisadvojcek6.jpg";
import Okna from "./images/okna.png";
/* zunanja */
import Zunanja1 from "./images/hisadvojcek8.jpg";
import Zunanja2 from "./images/hisadvojcek2.jpg";
import Zunanja3 from "./images/hisadvojcek.jpg";
import Zunanja4 from "./images/hisadvojcek17.jpg";
/* streha */
import Streha1 from "./images/streha.png";
import Streha2 from "./images/dvojcek3.jpg";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Logo,
      VideoKomp,
      VideoPhone,
      PrvaSlika,
      LokacijaImg,
      LevaEnota,
      DesnaEnota,
      Klet1,
      Klet2,
      Pritličje1,
      Pritličje2,
      Nadstropje1,
      Nadstropje2,
      Mansarda1,
      Mansarda2,
      Fasada,
      Okna,
      Zunanja1,
      Zunanja2,
      Zunanja3,
      Zunanja4,
      Streha1,
      Streha2,
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export {
  Logo,
  VideoKomp,
  VideoPhone,
  PrvaSlika,
  LokacijaImg,
  LevaEnota,
  DesnaEnota,
  Klet1,
  Klet2,
  Pritličje1,
  Pritličje2,
  Nadstropje1,
  Nadstropje2,
  Mansarda1,
  Mansarda2,
  Fasada,
  Okna,
  Zunanja1,
  Zunanja2,
  Zunanja3,
  Zunanja4,
  Streha1,
  Streha2,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <PreloadImages />
    <App />
  </BrowserRouter>
);
