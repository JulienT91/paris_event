import React from "react";
import ReactHtmlParser from 'react-html-parser';
import DateFunction from "../services/DateFunction";
import { Link } from "react-router-dom";



function CardEvent({event,id}) {
const eventDate = event.date_start;
return(
<div className="card-body">
    <div className="card-img">
        <figure>
            <figcaption>
            <Link to={{ pathname: "/event", search: `${id}` }}>
                    <h3 className="title-small">{event.title}</h3>
            </Link>
            </figcaption>
            <img src={event.cover_url} alt="Cover-img" />
        </figure>
    </div>
        <div className="card-desc">
            <div className="media">
                <div className="media-content">
                    <h3>{event.title}</h3>
                        <p>{DateFunction.DateForm(eventDate)}</p>
                </div>
            </div>
            <div className="content-desc">
                {ReactHtmlParser(event.description)}
                    <br />
                    <br />
                <button className="like-btn red-heart">
                    <span role="img" aria-label="like-btn"></span>
                </button>
            </div>
     </div>
</div>
    );
}

export default CardEvent;