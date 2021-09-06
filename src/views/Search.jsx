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
                    <input name="searchBar" type="text"></input>
                    <button type="submit">Rechercher</button>
                </form>
            </div>
        </main>
    )
}

export default Search;