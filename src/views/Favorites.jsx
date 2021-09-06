import React from "react";
import NavBar from "../components/Navbar";

const Favorites = () => {
    return(
        <div className="favorites">
             <div className="navContainer">
                <NavBar />
            </div>
            <div className="elementSave">
                <h1>Événements sauvegardés</h1>
                <p>Aucun événements ajouté aux favoris pour le moment.</p>
            </div>
        </div>
    )
}

export default Favorites;