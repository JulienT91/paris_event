import React from "react";
import NavBar from "../components/Navbar";

const Search = () => {
    return(
        <main className="Search">
            <div className="navContainer">
                <NavBar />
            </div>
            <div className="searchBar">
                <h1>Lister des futurs événements à Paris</h1>
                <form>
                    <input type="text" placeholder="Rechercher un événement" id="SearchInput"></input>
                    <button type="submit" id="SubmitBtn">Rechercher</button>
                </form>
            </div>
        </main>
    )
}

export default Search;