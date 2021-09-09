import React from "react";
import NavBar from "../components/Navbar";
import CardEvent from "../components/CardEvent";


const Home = () => {
    return(
        <div className="home">
            <div className="navContainer">
                <NavBar />
            </div>
            <div className="news">
                <CardEvent />
            </div>
        </div>
    )
}

export default Home;