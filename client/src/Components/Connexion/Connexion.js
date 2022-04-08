import React from "react";
import "./Connexion.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { loginUser, registerUser } from "../../js/actions/user";
function Connexion() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <form className="cnct">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            className="but"
            onClick={(e) => {
              e.preventDefault();
              dispatch(loginUser({ email, password }, navigate));
            }}
          >
            connecter 
      
          </button>
          <a className="a" href="#">
            Vous avez perdu votre mot de passe ?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
