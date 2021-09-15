import React, {useEffect,useState} from "react";
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
            <div className="news">
                <div className="discover">
                    <h2>Bienvenue sur Paris Event</h2>
                    <p>L'application qui regroupe les derniers évenements Parisien</p>
                </div>
                <hr />
                <div className="card-container">
                    {Events && Events.map((event) => (<CardEvent event={event.record.fields} key={event.record.id} id={event.record.id}/>))}
                </div>
            </div> 
        </div>
    )
}

export default Home;