import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../js/actions/user";

import "./Signup.css";

function Signup() {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [adress, setadress] = useState("");
  const [category, setcategory] = useState("");
  const [phone, setphone] = useState("");
  const [timeWork, settimework] = useState("");
  const [isdomicile, setdomicile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="tabib">
      <img src="./tabibe.png" />
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            {/* <label class="chk" aria-hidden="true">
              Sign up
            </label> */}
            <input
              type="text"
              name="txt"
              placeholder="Nom"
              required
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              name="txt"
              placeholder="Prénom"
              required
              onChange={(e) => setlastname(e.target.value)}
            />
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
              placeholder="mot de passe"
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <input
              type="text"
              name="pswd"
              placeholder="adresse"
              required
              onChange={(e) => setadress(e.target.value)}
            />
            {/* <input
              type="password"
              name="pswdd"
              placeholder="catégorie"
              required */}

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

            <input
              type="text"
              name="pswde"
              placeholder="Téléphone"
              required
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              type="text"
              name="pswda"
              placeholder="Temps de travail"
              required
              onChange={(e) => settimework(e.target.value)}
            />

            <input
              type="ts"
              name="pswod"
              placeholder="Domicile"
              required
              // onChange={(e) => setdomicile(e.target.value)}
              onChange={(e) => {
                setdomicile(e.target.value);
              }}
            />
            <button
              className="butt"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  registerUser(
                    {
                      name,
                      lastname,
                      email,
                      password,
                      adress,
                      category,
                      phone,
                      isdomicile,
                      timeWork,
                    },
                    navigate
                  )
                );
              }}
            >
              S'inscrire
            </button>
          </form>
        </div>
        {/* <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
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
              Login
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default Signup;
