import React from "react";
import NavBar from "../components/Navbar";

class Details extends React.Component {
    loadevent(){
        fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=1")
        .then(response=>response.json().then(result=>{
            console.log(result.records);
        }))
    }
    render() {
    return(
    <div>
        <div className="navContainer">
            <NavBar />
        </div>
        <button onClick={()=> {this.loadevent()}}>charger les events</button>
    </div>
    );
    }
}

export default Details;