import React ,{useState,useEffect}from "react";
import SearchCard from "../components/SearchCard";
import NavBar from "../components/Navbar";

const Search = () => {
    const [allData, setAllData] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        fetch("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=title%20asc%2Cdate_end%20desc&limit=10&pretty=false&timezone=UTC")
        .then((result) => result.json()).then((response) => setAllData(response.records))
    },[]);
    
    const setQueryValue = (e) => {
        setQuery(e.target.value);
    }
     const displayResult = () => {
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${query}`)
        .then((result) => result.json())
        .then((response) => {
            setQuery(response.records)
            console.log(response.records)
         }
        )
    }
    return(
        <main className="Search">
            <div className="navContainer">
                <NavBar />
            </div>
            <div className="search">
                <form className="input">
                <div className="searchBar">
                     <input type="text" name="searchBar" id="searchBar" onInput={setQueryValue} placeholder="rechercher un événement" />
                     <button type="button" name="search" onClick={displayResult}>Rechercher</button>
                 </div>
                </form>
                <div>
                    
                </div>
            </div>
        </main>
    )
}

export default Search; 