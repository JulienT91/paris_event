import React from "react";
import ReactHtmlParser from "react-html-parser";
import DateFunction from "../services/DateFunction";
import FavBtn from "./FavBtn";
import { Link } from "react-router-dom";

function CardEvent({ event, id }) {
  const eventDate = event.date_start;
  return (
    <div className="card-content">
      <figure>
        <figcaption>
          <Link to={{ pathname: "/details", search: `${id}` }}>
            <h3 className="title-small">{event.title}</h3>
          </Link>
        </figcaption>
        <div className="zoom_img">
          <img
            src={event.cover_url}
            alt={event.cover_alt}
            className="card-img-transition"
          />
        </div>
      </figure>
      <div className="card-desc">
        <div className="media">
          <div className="media-content">
            <p>{DateFunction.DateForm(eventDate)}</p>
          </div>
        </div>
        <div className="content-desc">
          {ReactHtmlParser(event.lead_text)}
          <br />
          <FavBtn id={id} />
        </div>
      </div>
    </div>
  );
}

export default CardEvent;
