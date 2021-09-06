import React from "react";
import NavBar from "../components/Navbar";

const Home = () => {
    return(
        <div className="home">
            <>
                <NavBar />
            </>
            <div className="title">
                <h1>Bienvenue sur Paris Events</h1>
                <p>L'application qui permets de rechercher en direct les prochains événements Parisiens</p>
            </div>
        </div>
    )
}

export default Home;