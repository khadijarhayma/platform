import React from 'react'
import "./Zone.css";
function Zone() {
  return (
    <div className='zone'>
        <h1>
        ZONE D'EXERCICE :
        </h1>
        <img src="./image7.png" />
        <p>
              MÉDINGABÉS intervient dans les communes suivantes :
              
            </p>
            <div className="region">
              <div className="gauche">
                <p>-Gabès Médina</p>
                <p>-Gabès Ouest</p>
                <p>-Gabès Sud</p>
                <p>-Ghannouch</p>
                <p>-El Hamma</p>
              </div>
              <div className="droite">
                <p>-Matmata</p>
                <p>-Mareth</p>
                <p>-Menzel El Habib</p>
                <p>-Métouia</p>
                <p>-Nouvelle Matmata</p>
              </div>
            </div>
    </div>
  )
}

export default Zone;