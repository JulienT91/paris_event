import React, { useEffect, useState } from "react";
import FavBtn from "../components/FavBtn";
import FavoriteEvent from "../components/FavoriteEvent";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem("FavProjectJulien");
    setFavorites(favs ? JSON.parse(favs) : []);
  }, []);

  return (
    <div className="favorites">
      <div className="elementSave">
        <h2>Événements sauvegardés</h2>
        {favorites?.map((id, index) => (
          <FavoriteEvent key={index} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
