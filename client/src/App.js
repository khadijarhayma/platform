import "./App.css";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import PrivateRoute from "./Components/router/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { current, getallUsers } from "./js/actions/user";
import Navigateur from "./navigateur/navigateur";
import Accueil from "./Components/accueil/Accueil";
import Présentation from "./Components/presentation/Présentation";
import VisiteDomicile from "./Components/domicile/VisiteDomicile";
import CentreDeConsultation from "./Components/centre/CentreDeConsultation";
import Tarifs from "./Components/tarif/Tarifs";
import Zone from "./Components/zone/Zone";
import Contact from "./Components/Contact/Contact";
import MonCompte from "./Components/compte/MonCompte";
import Footer from "./footer/footer";
import Condition from "./Components/condition/Condition";
import Rdv from "./Components/RDV/Rdv";
import AdminRoute from "./Components/router/AdminRoute";
import Profile from "./Components/profile/Profile";
import Calender from "./calender/Calender";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
    dispatch(getallUsers());
  }, []);

  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="App">
      <Navigateur />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Accueil />} />
        <Route path="/presentation" element={<Présentation />} />
        <Route path="/visite" element={<VisiteDomicile />} />
        <Route path="/centre" element={<CentreDeConsultation />} />
        <Route path="/tarif" element={<Tarifs />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/compte" element={<MonCompte />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rdv/:id" element={<Rdv />} />

        <Route element={<PrivateRoute />}>
          {/* <Route path="/dashbord" element={<Dashbord />} /> */}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
