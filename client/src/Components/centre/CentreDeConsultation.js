import React from 'react'

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import"./centre.css";
function CentreDeConsultation() {

  const [category, setcategory] = useState("");
  const users = useSelector((state) => state.userReducer.users);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [adress, setadress] = useState("");

  return (
    <div className="filter">
      <h1>Prenez rapidement un rendez-vous avec votre médecin !</h1>
      <p>
        Sélectionnez votre médecin, choisissez la date et l'heure de votre rdv
        et recevez votre sms/mail de confirmation. C’est aussi simple que ça !
      </p>
      <div className="flter">
        <div className="fil">
          <input
            placeholder="Nom du docteur"
            onChange={(e) => setname(e.target.value)}
          />
          <div className="sel">
            <select
              name="cars"
              id="categori"
              onChange={(e) => setcategory(e.target.value)}
            >
              <option value="volvo" className="categori">
                catégories
              </option>
              <option value="Cardiologue">Cardiologue</option>
              <option value="Chirurgien Esthétique">
                Chirurgien Esthétique
              </option>
              <option value="Dentiste">Dentiste</option>
              <option value="Dermatologue">Dermatologue</option>
              <option value="Gastro-entérologue">Gastro-entérologue</option>
              <option value="Généraliste">Généraliste</option>
              <option value="Gynécologue">Gynécologue</option>
              <option value="Interniste">Interniste</option>
              <option value="Neurologue">Neurologue</option>
              <option value="Nutrisionniste">Nutrisionniste</option>
              <option value="Ophtalmologue">Ophtalmologue</option>
              <option value="Pédiatre">Pédiatre</option>
              <option value="Psychiatre">Psychiatre</option>
              <option value="Radiologue">Radiologue</option>
              <option value="Urologue">Urologue</option>
            </select>
          </div>
        </div>
      </div>
      <div className="doctorss">
        <div className="proffile">
          {users ? (
            users
              .filter(
                (el) =>
                  el?.isdoctor == true &&
                  el?.name?.toUpperCase().includes(name?.toLocaleUpperCase()) &&
                  el?.category?.includes(category)

                // ||el.lastname.toUpperCase().includes(lastname.toLocaleUpperCase())
              )
              .map((el) => (
                <li class="table-row1">
                  <div className="card">
                    <div class="col col-1"> Nom: {el.lastname}</div>
                    <div class="col col-2"> Prénom:{el.name}</div>
                    <div class="col col-3">Adresse:{el.adress}</div>
                    <div class="col col-4"> spécialité:{el.category}</div>
                    <div class="col col-5" className="mail">
                      Email: {el.email}
                    </div>
                    <div class="col col-6">téléphone: {el.phone}</div>
                    <div class="col col-7"> {el.timeWork}</div>
                    <div class="col col-8"> {el.domicile}</div>

                    <Link to={`/rdv/${el._id}`}>
                      <button> prendre un rdv</button>
                    </Link>
                  </div>
                </li>
              ))
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default CentreDeConsultation;