import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../js/actions/user";
import "./navigateur.css";

const Navigateur = () => {
  const dispatch = useDispatch();

  const currentuser = useSelector((state) => state.userReducer.user);
  return (
    <div className="navigateur">
      <div className="navigateur-cant">
        <div className="logo">
          <h1>
            <a href="/home" title="MÉDINGABÉS">
              <strong> MÉDINGABÉS</strong>
            </a>
          </h1>
          <strong>
            <span color=" #3D407A;"> 7 jours sur 7</span>
          </strong>
        </div>

        <Link to="/home">Accueil</Link>
        <Link to="/presentation"> Présentation </Link>
        <Link to="/visite">Visite à domicile</Link>
        <Link to="/centre">Centre de consultation</Link>
        <Link to="/tarif">Tarifs</Link>
        <Link to="/zone"> Zone </Link>
        <Link to="/contact">Contact</Link>

        <div className="drp">
          <Link to="/compte">Inscription</Link>
          {/* <ion-icon className="iconn" name="person-outline"></ion-icon>Mon
            compte
          </Link>  */}
          <div className="drop-down">
            {/* <Link to="/compte"> Inscription</Link> */}
            {currentuser?.isadmin ? (
              <Link to="/dashbord"> Dashbord</Link>
            ) : null}
          </div>{" "}
          {console.log(currentuser)}
          {currentuser ? (
            <button onClick={() => dispatch(logout())}>
          <img className="deconnect" src="../../logout.png" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navigateur;
