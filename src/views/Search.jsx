import React ,{useState}from "react";
import SearchCard from "../components/SearchCard";

const Search = () => {
    const [allData, setAllData] = useState([]);

    const [searchVal, setsearchVal] = useState("");
    // fetch all the data here
    const setQuerySearch = (e) => {
        setsearchVal(e.target.value);
    }

     const displayResult = (e) => {
         
        e.preventDefault();
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${searchVal}`)
        .then((result) => result.json())
        .then((response) => {
        setAllData(response.records);
    });
}

    return(
        <main className="Search-container">
            <div className="search">
                <form className="input" onSubmit={displayResult} action="/" >
                <div className="searchBar">
                     <input type="text" name="searchBar" autoComplete="off" id="searchBar" onInput={setQuerySearch} placeholder="rechercher un événement" />
                     <button type="submit" name="search" >Rechercher</button>
                 </div>
                </form>
                <div className="card-cont">
                <h2>Résultat de la recherche :</h2>
                    {allData && 
                     allData.map((event) =>
                    (<SearchCard key={event.record.id} id={event.record.id} event={event.record.fields} />))}
                </div>
            </div>
        </main>
    )
}

export default Search; 