import { img_url } from "../utils/config";

const Restaurantcard = ({name, avgRating, cuisines, locality, cloudinaryImageId}) => {
    return (
        <div className="custom_card">
            <div className="img_container">
                <img src={img_url+cloudinaryImageId}
                    alt={name} width="100%" height="100%" />
            </div>
            <div className="px-2">
                <h6 className="my-1">{name}</h6>
                <h6 style={{width:"max-content"}} className="text-white bg-success p-1">⭐{avgRating}</h6>
                <h6 className="text-secondary">{cuisines.join(", ")}</h6>
                <h6 className="text-secondary">{locality}</h6>
            </div>
        </div>
    )
}

export default Restaurantcard;
