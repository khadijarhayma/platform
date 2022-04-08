import React from "react";
import "./Accueil.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Accueil() {
  return (
    <div>
      <div className="content">
        <div className="doc">
          <div className="med">
            <h3> MÉDINGABÉS</h3>
            <h4>Prise de rendez-vous en ligne</h4>
            <p>Un médecin en consultation ou à domicile le jour même</p>
            <button>
              <a href="/presentation"> savoir plus</a>
            </button>
          </div>
          <img src="./undraw_medicine.png" />
        </div>
        <div className="carts">
          <div className="cart">
            <a href="/centre">
              <img src="./image1.png" width="90" height="90" alt="" />
              <h4>Au centre de consultation</h4>
            </a>
          </div>
          <div className="cart">
            <a href="/visite">
              <img src="./image2.png" width="90" height="90" alt="" />
              <h4>Visite à domicile</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="med1">
        <h3> MÉDINGABÉS</h3>
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
      <div className="carts3">
        <div className="cart3">
          <a href="/centre">
            <img src="./image5.png" width="150" height="150" alt="" />
            <h4>CHOIX DE VOTRE MODE DE CONSULTATION</h4>
            <h5>A domicile ou au centre de consultation.</h5>
          </a>
        </div>
        <div className="btween">
          <AiOutlineArrowRight className="btweenfl" />
        </div>
        <div className="cart4">
          <a href="/centre">
            <img src="./image6.png" width="150" height="150" alt="" />
            <h4>INSCRIPTION ET RÉSERVATION</h4>
            <h5>
              Remplissez le formulaire de demande et validez votre profil.
            </h5>
          </a>
        </div>
      </div>
      <div className="buttonrdv">
        <button>
          <a href="/centre"> Prenez rendez-vous</a>
        </button>
      </div>
      <div className="zoex">
        <h1>ZONE D'EXERCICE POUR LES VISITES À DOMICILE :</h1>
        <div className="cartgabes">
          <img src="./image7.png" />
          <div className="descrip">
            <p>
              Les médecins de l'association MÉDINGABÉS effectuent des visites à
              domicile dans les communes suivantes :
            </p>
            <div className="region">
              <div className="gauche">
                <p>-Gabès Médina</p>
                <p>-Gabès Ouest</p>
                <p>-Gabès Sud</p>
                <p>-Ghannouch</p>
                <p>-El Hamma</p>
              </div>
              <div className="droite">
                <p>-Matmata</p>
                <p>-Mareth</p>
                <p>-Menzel El Habib</p>
                <p>-Métouia</p>
                <p>-Nouvelle Matmata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="med2">
          <h4> MÉDINGABÉS</h4>
          <h5>Association de médecins</h5>
          <p>Structure de soins non programmés 7j/7</p>
        </div>
        <div className="cadre11">
          <div className="cadre1">
            <p>
              Nos médecins vous reçoivent au centre de consultation et se
              déplacent à domicile 7 jours sur 7 sur Gabès et son agglomération.
            </p>
            <div className="cadre2">
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
            <div className="cadre3">
              <p>Vous avez besoin d’une </p>
              <h4>visite à domicile,</h4>
              <button>
                <a href="/visite"> cliquer ici</a>
              </button>
              <p>
                {" "}
                .Le standard puis un médecin vous rappellent rapidement et
                fixent avec vous l’heure de la visite.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="facilite">
        <h1>Pour faciliter le travail des médecins en visite à domicile :</h1>
        <div className="facile">
          <div className="facil">
            {/* <p>
              **Essayez de toujours rester joignable par téléphone. Le standard
              puis un médecin vont être amenés à vous joindre. Les médecins vous
              appelleront toujours en numéro masqué, merci de débloquer les
              appels masqués.
            </p> */}
            <p>
              **Préparez vos documents médicaux : Il est important de présenter
              vos ordonnances, vos derniers examens, électrocardiogramme,
              dernier compte rendu d’hospitalisation, votre carte vitale. Le
              carnet de santé pour les enfants. Ceci permettra une meilleure
              prise en charge médicale pour vous ou vos proches.
            </p>
            <h4>
              Ceci permettra une meilleure prise en charge médicale pour vous ou
              vos proches.
            </h4>
          </div>
        </div>
      </div>
      <div className="appel">
        <img src="./image8.png" />
        <p>
         
          Vous rencontrez une difficulté pour utiliser notre service en ligne
        </p>
        <h3>Contactez-nous par téléphone :</h3>
        <button>
          <a href="tel://27386733"> 27 386 733 </a>
        </button>
      </div>
      <div className="money">
      <h2> MÉDINGABÉS 7j/7</h2>
      <h3>Association de médecins conventionnés secteur 1 sans dépassement d'honoraires.</h3>
      <p>Modes de réglement d'honoraires acceptés par les médecins lors de votre consultation :</p>
      <div className="photo">
      < img src="./image9.png" />
      < img src="./image10.png" />
      < img src="./image11.png" />
      < img src="./image12.png" />
      </div>
      </div>
    </div>
  );
}

export default Accueil;
