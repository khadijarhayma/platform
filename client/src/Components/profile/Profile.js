import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getallrdv, editrdv } from "../../js/actions/rdv";
import { edituser } from "../../js/actions/user";
import "./Profile.css";
function Profile() {
  const [profileEdit, setprofileEdit] = useState({});
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const rdvs = useSelector((state) => state.rdvReducer.rdvs);

  useEffect(() => {
    dispatch(getallrdv());
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="profilee">
        <img src="../../../profil.jpg" />
        <div className="change">
          <div className="1">
            <input
              type="text"
              placeholder={user?.name}
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder={user?.lastname}
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, lastname: e.target.value });
              }}
            />
          </div>
          <div className="2">
            <input
              type="text"
              placeholder={user?.phone || "phone"}
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, phone: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder={user?.adress || "adresse"}
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, adress: e.target.value });
              }}
            />
          </div>
          <div className="3">
            <input
              type="text"
              placeholder={user?.email}
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, email: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="mot de passe"
              onChange={(e) => {
                setprofileEdit({ ...profileEdit, password: e.target.value });
              }}
            />
          </div>

          <button
            className="enregist"
            onClick={() => {
              dispatch(edituser({ id: user._id, user: profileEdit }));
            }}
          >
            {" "}
            enregistrer
          </button>
        </div>
      </div>
      <div className="rdvs">
        <div className="attend">
          <h1>en attend</h1>
          <div className="attendre">
          {rdvs
            ? rdvs
                .filter((el) => el?.doctor == user?._id && el?.status == "attend")
                .map((el) => (
                  <div className="rdv-card">
                    <h2>{el?.patient?.name}</h2>
                    <h2>{el?.date}</h2>
                    <button onClick={() =>
                        dispatch(editrdv({ id: el?._id, status: "confirmed" }))}
                    >confirm</button>
                  </div>
                ))
            : null}
            </div>
        </div>
        <div className="confirmed">
          <h1>confirme</h1>
          <div className="attendre">
          {rdvs
            ? rdvs
                .filter(
                  (el) => el?.doctor == user?._id && el?.status == "confirmed"
                )
                .map((el) => (
                  <div className="rdv-card">
                    <h2>{el.patient?.name}</h2>
                    <h2>{el?.date}</h2>
                    <button
                    >
                      confirm
                    </button>
                  </div>
                ))
            : null}
           </div> 
        </div>
      </div>
    </div>
  );
}

export default Profile;
