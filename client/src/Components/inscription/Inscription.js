import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../js/actions/user";
import "./Inscription.css";


function Inscription() {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phone,setphone]=useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
     <div>
        <form className='cncté'>
            <button className='sante'>
            <a href='/signup'>Vous etes professionel de santé ?</a>
            </button>
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
            {/* <input
              type="password"
              name="pswde"
              placeholder="Téléphone"
              required
              onChange={(e) => setphone(e.target.value)}
            /> */}
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
           
            <button
              className="but"
              onClick={(e) => {
               
                dispatch(registerUser({ name,lastname,email, password }, navigate("/profile")));
              }}
            >
                    
             s'inscrire
            </button>
           
        
          </form>
        </div>


      
    
  )
}

export default Inscription