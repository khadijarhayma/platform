import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calender from "../../calender/Calender";
import { useDispatch, useSelector } from "react-redux";
import { addrdv } from "../../js/actions/rdv";
import "./Rdv.css";
function Rdv() {
  const rdvs = useSelector((state) => state.rdvReducer.rdvs);
  const user = useSelector((state) => state.userReducer.user);
  const [date, setdate] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const [doctor, setdoctor] = useState({});
  useEffect(async () => {
    let result = await axios
      .get(`/user/${params.id}`)
      .then((res) => setdoctor(res.data.user));
  }, []);

  return (
    <div className="detail">
      <img src={doctor?.photo} />
      <h2>Nom:{doctor?.name}</h2>
      <h2>Prénom:{doctor?.lastname}</h2>
      <h2>Téléphone:{doctor?.phone}</h2>
      <h2>Adresse:{doctor?.adress}</h2>
      <h2>Email:{doctor?.email}</h2>

      {/* <input type="date" /> */}

      <input type="datetime-local" onChange={(e) => setdate(e.target.value)} />
      {/* <Calender /> */}

      <button
        onClick={() =>
          dispatch(
            addrdv({
              doctor: params.id,
              patient: { name: user?.name, _id: user?._id },
              date: date,
              status: "attend",
            })
          )
        }
      >
        Fixer un RDV
      </button>
    </div>
  );
}

export default Rdv;
