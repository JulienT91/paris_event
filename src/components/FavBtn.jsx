import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const StorageEvent = {
  newLocalStorage() {
    let FavIds = localStorage.getItem("FavProjectJulien");
    //s'il n'y en a pas on crée un tableau | s'il y en a, on transforme la string en tableau
    FavIds = FavIds ? JSON.parse(FavIds) : [];

    return FavIds;
  },
};

const FavBtn = ({ id }) => {
  const [isFav, setIsFav] = useState(false);

  const executeUpdate = () => {
    const newValue = !isFav;
    setIsFav(newValue);

    let FavIds = StorageEvent.newLocalStorage();

    if (FavIds.includes(id)) {
      setIsFav(false);
      FavIds.splice(FavIds.indexOf(id), 1);
    } else {
      setIsFav(true);
      FavIds.push(id);
    }

    localStorage.setItem("FavProjectJulien", JSON.stringify(FavIds));
  };

  useEffect(() => {
    let FavIds = StorageEvent.newLocalStorage();

    if (FavIds.includes(id)) {
      setIsFav(true);
    }
  }, [id]);

  return (
    <button onClick={executeUpdate} className="Card_BtnFav">
      {!isFav && <FaRegHeart />}
      {isFav && <FaHeart />}
    </button>
  );
};

export default FavBtn;
