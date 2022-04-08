import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import "animate.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo1">
          <h1>
            <a href="/home" title="MÉDINGABÉS">
              <strong> MÉDINGABÉS</strong>
            </a>
          </h1>
        </div>
        <div className="propos">
          <h1>À PROPOS</h1>
          <Link to="/presentation">
            {" "}
            <div className="lnk">
              Présentation <AiOutlineArrowRight className="fleche" />
            </div>{" "}
          </Link>
          <Link to="/tarif">
            <div className="lnk">
              Tarifs
              <AiOutlineArrowRight className="fleche" />
            </div>
          </Link>
          <Link to="/zone">
            <div className="lnk">
              {" "}
              Zone <AiOutlineArrowRight className="fleche" />
            </div>
          </Link>
          <Link to="/contact">
            <div className="lnk">
              Contact
              <AiOutlineArrowRight className="fleche" />
            </div>
          </Link>
          <Link to="/">
            <div className="lnk">
              Connexion
              <AiOutlineArrowRight className="fleche" />
            </div>
          </Link>
        </div>
        <div className="contactnous">
          <h1> CONTACTEZ-NOUS</h1>

          <a href="tel://27386733">
            {" "}
            <BiMobile color="rgb(212, 46, 185)"className="ctn" />
            27.386.733
          </a>

          <a href="mailto:khadijarhayma@gmail.com">
            <AiOutlineMail color="rgb(212, 46, 185)" className="ctn"/>
            khadijarhayma@gmail.com
          </a>
          <div className="retrouve">
            <h1>RETROUVEZ-NOUS</h1>
            <div className="social">
              <a href="https://www.facebook.com/khadija.rh.3">
                <FaFacebookF />{" "}
              </a>
              <a href="https://www.linkedin.com/in/khadija-rhayma-94b16314a">
                {" "}
                <IoLogoLinkedin />
              </a>
              <a href="https://www.instagram.com/rhaymakhadija/?hl=fr">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <Link to="condition">Conditions d'utilisation</Link>
        <div className="Copyright">
          <p>Copyright ©</p>
          <a href="mailto:khadijarhayma@gmail.com">KhadijaRhayma</a>
          <p> 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
