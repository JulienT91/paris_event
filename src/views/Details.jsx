import React ,{useEffect,useState} from "react";
import { useLocation } from "react-router";
import FavBtn from "../components/FavBtn";
import ReactHtmlParser from 'react-html-parser';
import {ImPhone} from "react-icons/im";
import {HiMail} from "react-icons/hi";
import {CgWebsite} from "react-icons/cg";



const Details = () => {

    const id = useLocation().search.split("?")[1];
    const[EventDetails,setEventDetails] = useState(null);
    useEffect (() => {
        detailsResults();
    },[]) 
     const detailsResults = () => {
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
         .then((result) => result.json())
         .then((response) => {
         setEventDetails(response.record.fields)
         });
    }

    return(
        <div className="Details-home">
            <div className="Details-container">
             {EventDetails &&
             <>
                <div className="details-card">
                    <div className="details_desc">
                    <h2>{EventDetails.title}</h2>
                        <figure>
                        <img src={EventDetails.cover_url} alt={EventDetails.cover_alt} />
                            <figcaption>
                                <h3>{ReactHtmlParser(EventDetails.lead_text)}</h3>
                                {ReactHtmlParser(EventDetails.description)}
                            </figcaption>
                        </figure>
                    </div>  
                    <div className="details_info">
                    <div className="FavDiv">
                                <span>Ajouter aux favoris</span>
                                <FavBtn />
                            </div>
                        <div>
                            <h3>Dates:</h3>
                            <p>{ReactHtmlParser(EventDetails.date_description)}</p>
                        </div>
                        <div>
                            <h3>Prix :</h3>
                            <p>{EventDetails.price_detail}</p>
                        </div>
                        <div>
                            <h3>S'y rendre : </h3>
                            <address>

                                <p>{EventDetails.address_name}-{EventDetails.contact_name}</p>
                                <p>{EventDetails.address_street}-{EventDetails.address_zipcode} {EventDetails.address_city}</p>
                                
                            </address>
                        </div>
                        <div>
                            <h3>En transport :</h3>
                            <p>{ReactHtmlParser(EventDetails.transport)}</p>
                        </div>
                        <div>
                            <h3>Plus d'info</h3>
                            <p><ImPhone/> : {EventDetails.access_phone}</p>
                            <p><HiMail/> : <a href="mailto:{EventDetails.access_mail}">{EventDetails.access_mail}</a></p>
                            <p><CgWebsite/> :<a target="_blank" href={EventDetails.contact_url}>{EventDetails.contact_url}</a></p>
                        </div>
                    </div>
                </div>
             </>
             }
            </div>
        </div>
    )
}


export default Details;