import "./Contact.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true);
    emailjs
      .sendForm(
        "service_g8bemg3",
        "template_x55dp5i",
        formRef.current,
        "AbJAbQh-I_3Xo2O9O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="cont">
      
      <div className="about">
        <img src="./doctor.jpg" />
        <div className="aboutt">
          <h3>MÉDINGABÉS</h3>
          <h6>ADRESSE.</h6>
          <p>Ghannouch-Gabés6021</p>
          <h4>Téléphone</h4>
          <a href="tel://27386733">27.386.733</a>
        </div>
      </div>
      <div className="call">
        <div className="callme">
          <h2>Contactez nous par email</h2>
          <p>
            N'hésitez pas à nous contacter en remplissant le formulaire
            ci-dessous.
          </p>
          <form onSubmit={handleSubmit} ref={formRef}>
          <div className="put" >
            
            <div className="put1">
              <input placeholder="Prénom" name="user_name" />
              <input placeholder="Nom" />
            </div>
            <div className="put2">
              <input placeholder="Email" name="user_email" />
              <input placeholder="Numéro de Téléphone" />
            </div>
            <div className="msg">
              <input placeholder="votre message"  name="message"/>
            </div>
            <button type="submit">
              envoyer
            </button>
          </div>
          </form>
        </div>
        <div className="appel1">
          <img src="./image8.png" />
          <p>
            Vous rencontrez une difficulté pour utiliser notre service en ligne
          </p>
          <h3>Contactez-nous par téléphone :</h3>
          <button>
            <a href="tel://27386733"> 27 386 733 </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
