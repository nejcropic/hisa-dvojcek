import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NavBar.css";
import {
  /* hideNavItemsVarian, */
  mobileMenuVariant,
  fadeInVariant,
  ulVariant,
  liVariant,
  hideNavItemsVariant,
} from "../animations.jsx";
import { NavMenuItems } from "./NavMenuItems.jsx";

const NavBar = ({ refs }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToRef = (refName) => {
    const ref = refs[refName];
    console.log(ref);
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setMobileNavOpen(false);
    }
  };

  return (
    <main className="container">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        {/* <div className="logo-container">
          <motion.h1 variants={hideNavItemsVariant}>Design Agency</motion.h1>
        </div> */}
        <div className="menu-container">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <i className="fas fa-times"></i>
          </motion.button>
          <motion.ul variants={ulVariant}>
            {NavMenuItems.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  onClick={() => scrollToRef(navItem.ref)}
                  variants={liVariant}
                >
                  {navItem.title}
                </motion.div>
              </motion.li>
            ))}
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div
                onClick={() => scrollToRef("galerijaRef")}
                variants={liVariant}
              >
                Galerija
              </motion.div>
            </motion.li>
          </motion.ul>
          {/* <motion.div variants={fadeInVariant} className="contact">
            <h5>+38640619246</h5>
            <h5>www.ums.si</h5>
          </motion.div> */}
        </motion.div>
      </motion.nav>
    </main>
  );
};

export default NavBar;

/* import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

import { navAnimation } from "../animations.jsx";
import { NavMenuItems } from "./NavMenuItems.jsx";

function NavBar() {
  const [navMenu, setNavMenu] = useState(false);
  const showNavBar = () => setNavMenu(!navMenu);

  return (
    <motion.nav
      variants={navAnimation}
      initial="hidden"
      animate="show"
      className="nav-group"
    >
      <div className="menu-icons" onClick={showNavBar}>
        <i className={navMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={navMenu ? "nav-menu active" : "nav-menu "}>
        {NavMenuItems.map((item, index) => {
          return (
            <div key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  showNavBar();
                }}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default NavBar;
 */
