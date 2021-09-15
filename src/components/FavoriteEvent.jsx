import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const FavoriteEvent = ({ id }) => {
  const [EventDetails, setEventDetails] = useState(null);
  useEffect(() => {
    detailsResults();
  }, []);

  const detailsResults = () => {
    fetch(
      `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`
    )
      .then((result) => result.json())
      .then((response) => {
        setEventDetails(response.record.fields);
      });
  };

  if (!EventDetails) return <p>Loading ...</p>;

  return <div className="favorites-card">
      <Link to={{ pathname: "/details", search: `${id}` }}>
            <h3 className="title-small">{EventDetails.title}</h3>
        </Link>
            <figure>
              <div className="zoom_img">
                <img 
                      className="card-img-transition"
                      src={EventDetails.cover_url}
                      alt={EventDetails.cover_alt} 
                />
              </div>
              <figcaption>
                <h4>{ReactHtmlParser(EventDetails.lead_text)}</h4>
              </figcaption>
            </figure>
            <p className="details-link"> <Link to={{ pathname: "/details", search: `${id}` }}>En savoir plus...</Link></p>
      </div>
};

export default FavoriteEvent;
