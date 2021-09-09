import React from "react";
import ReactHtmlParser from 'react-html-parser';


function CardEvent({event}) {

return(
<div className="card-body">
    <div className="card-img">
        <figure>
            <img src={event.cover_url} alt="Cover-img" />
        </figure>
    </div>
        <div className="card-desc">
            <div className="media">
                <div className="media-content">
                    <h3>{event.title}</h3>
                        <p>{event.date_start}</p>
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