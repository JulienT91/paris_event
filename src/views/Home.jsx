import React from "react";
import NavBar from "../components/Navbar";

const Home = () => {
    return(
        <div className="home">
            <div className="navContainer">
                <NavBar />
            </div>
            <div className="title">
                <h1>Bienvenue sur Paris Events</h1>
                <p>L'application qui permets de rechercher en direct les prochains événements Parisiens</p>
            </div>
            <div className="news">
                <h2>Actualités</h2>
                <p>Les derniers événements publié :</p>
            </div>
        </div>
    )
}

export default Home;