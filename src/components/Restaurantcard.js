



const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const Restaurantcard = ({rating, cuisines, location, name, cloudinaryImageId}) => {
    // const {name, rating, cuisines, location} = props;
    return(
        <div className="custom_card pb-2">
            <div className="img_container">
                <img src={img_url+cloudinaryImageId}
                    alt="res_image" width="100%"/>
            </div>
            <div className="px-2">{name}</div>
            <div className="px-2">⭐{rating}</div>
            <div className="px-2">{cuisines.join(", ")}</div>
            <div className="px-2">{location}</div>
        </div>
    )
}


export default Restaurantcard;