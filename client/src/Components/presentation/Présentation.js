import React from "react";
import "./Presentation.css";
function Présentation() {
  return (
    <div className="present">
      <h1>MÉDINGABÉS</h1>
      <h2>
      MÉDINGABÉS est une association de médecins. Nous sommes impliqués dans la
        prise en{" "}
      </h2>
      <h3>charge des soins non programmés.</h3>
      <div className="pregabes">
        <img src="./gaboussa.jpg" height="400" width="400" />
        <div className="presentus">
          <p>
            Nos médecins vous reçoivent au centre de consultation et se
            déplacent à domicile 7 jours sur 7 de 8h à minuit.
          </p>
          <div className="gabes1">
            <div className="gabess2">
              <p>Pour bénéficier d’une </p>
              <h4>consultation dans notre centre,</h4>
              <button>
                <a href="/centre"> cliquer ici</a>
              </button>
              <p>
                .Vous pourrez choisir directement l’heure de votre consultation
                le jour même.
              </p>
            </div>
            <div className="gabes3">
              <p>Vous avez besoin d’une </p>
              <h4>visite à domicile,</h4>
              <button>
                <a href="/visite"> cliquer ici</a>
              </button>
              <p>
                Un médecin vous rappelle rapidement et fixe avec vous l’heure de
                la visite.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="partie2">
        <div className="paragraphe">
          <h3>Nos objectifs :</h3>
          <p>
            Désengorger les urgences lorsqu’un passage aux urgences n’est pas
            nécessaire.
          </p>
          <p>
            Intervenir rapidement pour les patients les plus fragiles.
            Nourrissons, sujets âgés dépendants à domicile...
          </p>
          <p>
            Soulager les médecins traitants et leur proposer une solution de
            prise en charge le jour même pour leurs patients. Leur permettre de
            partir en congés en sachant que leur patients seront pris en charge
            en cas de problème de santé.
          </p>
          <p>
            Nous n’avons pas vocations à remplacer les urgences. En cas
            d’urgence appelez le 15.
          </p>
        </div>
        <img src="./doctor2.jpg" />
      </div>

      <div className="medp">
        <h5> MÉDINGABÉS</h5>
        <h4>Association de médecins</h4>
        <p>Structure de soins non programmés 7j/7</p>
      </div>

      <div className="carts1">
        <div className="cart1">
          <a href="/centre">
            <img src="./image3.png" width="150" height="150" alt="" />
            <h4>Prendre rendez-vous au centre de consultation.</h4>
            <h5>Choisizzez un heure directement en ligne.</h5>
          </a>
        </div>
        <div className="cart2">
          <a href="/visite">
            <img src="./image4.png" width="150" height="150" alt="" />
            <h4>Demandez une visite à domicile.</h4>
            <h5>Un médecin vous contacte rapidement</h5>
          </a>
        </div>
      </div>
      <div className="buttonrdv">
        <button>
          <a href="/centre"> Prenez rendez-vous</a>
        </button>
      </div>
    </div>
  );
}

export default Présentation;
