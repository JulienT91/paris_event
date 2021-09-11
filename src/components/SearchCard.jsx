import React from "react";
import ReactHtmlParser from 'react-html-parser';
import DateFunction from "../services/DateFunction";
import { Link } from "react-router-dom";
import FavBtn from "./FavBtn";

function CardEvent({event,id}) {
const eventDate = event.date_start;
return(
<div className="card-body">
    <div className="card-img">
        <figure>
            <figcaption>
            <Link to={{ pathname: "/details", search: `${id}` }}>
                    <h3 className="title-small">{event.title}</h3>
            </Link>
            </figcaption>
            <img src={event.cover_url} alt={event.cover_alt} />
        </figure>
    </div>
        <div className="card-desc">
            <div className="media">
                <div className="media-content">
                        <p>{DateFunction.DateForm(eventDate)}</p>
                </div>
            </div>
            <div className="content-desc">
                {ReactHtmlParser(event.lead_text)}
                    <br />
                <FavBtn />
            </div>
     </div>
</div>
    );
}

export default CardEvent;