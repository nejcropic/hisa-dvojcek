import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <Link
              to=""
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <p>Domov</p>
            </Link>
          </div>
          <div className="sb_footer-links_div">
            <Link to="https://www.ums.si/">
              <p>UMS d.o.o</p>
            </Link>
            <p>Brodarjev trg 14</p>
            <p>1000 Ljubljana</p>
            {/* 
            <a href="tel:+38640619246">
              <p>SAŠO: 040 619 246</p>
            </a>
            <a href="tel:+38651228443">
              <p>MILAN: 051 228 443</p>
            </a>
            <a href="tel:+38670894959">
              <p>UROŠ: 070 894 959</p>
            </a> */}
            <a href="mailto:info@ums.si">
              <p>info@ums.si</p>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} UMS d.o.o. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
