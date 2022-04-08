import React from "react";
import { Link } from "react-router-dom";
import "./MonCompte.css";

import Connexion from "../Connexion/Connexion";
import Inscription from "../inscription/Inscription";
import { useState } from "react";

function MonCompte() {
  const [modalOpen, setModalOpen] = useState("1");
  return (
    <div className="compte">
      <img src="./compe.svg" />
      <div className="connecter">
        <div className="question">
          <h1>Vous avez déjà utilisé </h1>
          <h2>MÉDINGABÉS</h2>
          <h1>?</h1>
        </div>
        <div className="choix">
          <div className="bnchoix">
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen("1");
              }}
            >
              connexion
            </button>
            <button
              className="inscription"
              onClick={() => {
                setModalOpen("2");
              }}
              //  onClick={()=>{setModalOpen(false) ;}}
            >
              inscription
            </button>
          </div>

          {/* {modalOpen && <Connexion setOpenModal={setModalOpen} />}  */}
        </div>
        {modalOpen == "1" ? <Connexion /> : null}
        {modalOpen == "2" ? <Inscription /> : null}
      </div>
    </div>
  );
}

export default MonCompte;
