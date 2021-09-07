import React ,{useEffect, useState} from "react";

function LatestCard() {
    const [Title, setTitle] = useState();
    const [CoverUrl, setCoverUrl] = useState();
    const [Date, setDate] = useState();
    const [Description, setDescription] = useState();
    useEffect(() => {
        fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=1&facet=category&refine.category=Concerts+-%3E+Hip-Hop")
        .then((result) => result.json()).then((response) =>
        <>
        {
        setTitle(response.records[0].fields.title),
        setCoverUrl(response.records[0].fields.cover_url),
        setDate(response.records[0].fields.date_start),
        setDescription(response.records[0].fields.description)
        }
        </>);
    }, []);
    return( 
        <div className="grid-container-evt">
            <a className="" href="">
                <div className="card-img">
                    <figure>
                        <img src={CoverUrl} alt="Cover-img" />
                    </figure>
                </div>
                <div className="card-desc">
                    <div className="media">
                        <div className="media-content">
                            <h3>{Title}</h3>
                            <p>{Date}</p>
                        </div>
                    </div>
                    <div className="content-desc">
                        {Description}
                        <br />
                        <br />
                        <button className="like-btn red-heart">
                            <span role="img" aria-label="like-btn">Heart</span>
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default LatestCard;