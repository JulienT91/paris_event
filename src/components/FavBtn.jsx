import { FaHeart,  FaRegHeart } from "react-icons/fa";

const FavBtn = ({isFav,updateFav}) => {
    const executeUpdate = () => {
        updateFav();
    }
    return (
        <button onClick={executeUpdate} className="Card_BtnFav">
             {!isFav && <FaRegHeart/>}
             {isFav && <FaHeart />}
        </button>
    )
}

export default FavBtn;