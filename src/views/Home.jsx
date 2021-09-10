import React, {useEffect,useState} from "react";
import NavBar from "../components/Navbar";
import CardEvent from "../components/CardEvent";


const Home = () => {
    const [Events, setEventStorage] = useState([]);
    useEffect(() => {
        fetch("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=title%20asc%2Cdate_end%20desc&limit=10&pretty=false&timezone=UTC")
        .then((result) => result.json()).then((response) => setEventStorage(response.records))
    },[]);

    useEffect(() => {
        console.log(Events);
    },[Events]);

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
                <div className="card-content">
                    {Events && Events.map((event) => (<CardEvent event={event.record.fields} key={event.record.id} id={event.record.id}/>))}
                </div>
            </div> 
        </div>
    )
}

export default Home;