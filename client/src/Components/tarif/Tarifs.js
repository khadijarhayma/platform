import React from "react";
import "./tarif.css";
function tarifs() {
  return (
    <div className="tarif">
      <h1>Tarifs</h1>
      <h4>
        Les médecins de MÉDINGABÉS sont tous conventionnés secteur 1 et
        appliquent les tarifs sans{" "}
      </h4>
      <h5>dépassement d’honoraires, sauf conditions particulières.</h5>
      <div className="tarifs">
        <img src="../../../tarif.jpg" />
        <div className="prix">
          <div className="apres">
            <h3>Après 20h</h3>
            <p>, le tiers payant sera systématiquement réalisé.</p>
          </div>
          <div className="avant">
            <h3>Avant 20h</h3>
            <p>
              , vous pourrez demander aux médecins de vous faire le tiers payant
              si besoin.
            </p>
          </div>
        </div>
      </div>
           <div className="kaliss">
      <div className="cart31">
          <img src="./image1.png" width="150" height="150" alt="" />
          <h4>TARIFS AU AU CENTRE DE CONSULTATION :</h4>
          <h5>- Avant 20h : 25€. Si tiers payant : 7,5€</h5>
<h5>- Après 20h : tiers payant systématique : 18€, si pas de tiers payant 60€</h5>
<h5>- Majoration enfants de moins de 6 ans : + 5€.</h5>
       
      </div>


      <div className="cart31">
          <img src="./image2.png" width="150" height="150" alt="" />
          <h4>TARIFS DES VISITES À DOMICILE JUSTIFIÉES :</h4>
          <h5>
- Avant 20h : 35 €. Si tiers payant 10,5€</h5>
<h5>- Après 20h : tiers payant systématique : 19,05€ , si pas de tiers payant 63,50€</h5>
<h5>- Majoration enfants moins de 6 ans : + 5€.</h5>
       
      </div>
      </div>
    </div>
  );
}

export default tarifs;
