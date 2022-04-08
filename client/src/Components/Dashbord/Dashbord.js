import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { edituser, deleteuser } from "../../js/actions/user";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashbord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      <h1 style={{ color: "white" }}> Dashboard </h1>

      <div class="container">
        <h2>
          ADD ME <small>please</small>
        </h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Nom</div>
            <div class="col col-2">Prénom</div>
            <div class="col col-3">adresse</div>
            <div class="col col-4">catégorie</div>
            <div class="col col-5">E-mail</div>
            <div class="col col-6">Téléphone</div>
            <div class="col col-7">Temps de travail</div>
            <div class="col col-8">Domicile</div>

            <div class="col col-9">Actions</div>
          </li>
          {users ? (
            users
              .filter((el) => el.isdoctor == false)
              .map((el) => (
                <li class="table-row">
                  <div class="col col-1">{el.lastname}</div>
                  <div class="col col-2">{el.name}</div>
                  <div class="col col-3">{el.adress}</div>
                  <div class="col col-4"> {el.category}</div>
                  <div class="col col-5"> {el.email}</div>
                  <div class="col col-6"> {el.phone}</div>
                  <div class="col col-7"> {el.timeWork}</div>
                  <div class="col col-8"> {el.isdomicile}</div>

                  <div class="col col-9">
                    <button
                      onClick={() =>
                        dispatch(
                          edituser({ id: el._id, user: { isdoctor: true } })
                        )
                      }
                    >
                      approuver
                    </button>
                    {/* {console.log(el._id)} */}
                    <button onClick={() => dispatch(deleteuser({id:el._id}))}>
                      supprimer
                    </button>
                  </div>
                </li>
              ))
          ) : (
            <h1>loading</h1>
          )}
        </ul>
      </div>
      <div className="container">
        <h2>
          <small>list of doctor</small>
        </h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Nom</div>
            <div class="col col-2">Prénom</div>
            <div class="col col-3">adresse</div>
            <div class="col col-4">catégorie</div>
            <div class="col col-5">E-mail</div>
            <div class="col col-6">Téléphone</div>
            <div class="col col-7">Temps de travail</div>
            <div class="col col-8">Domicile</div>

            <div class="col col-9">Actions</div>
          </li>
          {users ? (
            users
              .filter((el) => el.isdoctor == true)
              .map((el) => (
                <li class="table-row">
                  <div class="col col-1">{el.lastname}</div>
                  <div class="col col-2">{el.name}</div>
                  <div class="col col-3">{el.adress}</div>
                  <div class="col col-4"> {el.category}</div>
                  <div class="col col-5"> {el.email}</div>
                  <div class="col col-6"> {el.phone}</div>
                  <div class="col col-7"> {el.timeWork}</div>
                  <div class="col col-8"> {el.isdomicile}</div>

                  <div class="col col-9">
                    <button
                      onClick={() =>
                        dispatch(
                          edituser({ id: el._id, user: { isdoctor: true } })
                        )
                      }
                    >
                      approuve
                    </button>
                  
                    {/* {console.log(el._id)} */}
                    <button onClick={() => dispatch(deleteuser({id:el._id}))}>
                      supprimer
                    </button>
                  </div>
                </li>
              ))
          ) : (
            <h1>loading</h1>
          )}
        </ul>
      </div>
      <button
        className="belive"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/compte");
        }}
      >
        connexion
      </button>
    </div>
  );
};

export default Dashbord;
