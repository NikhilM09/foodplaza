import Restaurantcard from "./Restaurantcard";
import restaurantList from "../utils/dummyData";
import { useState, useEffect } from 'react';
import Searchbar from "./Searchbar";


const Cardcontainer = () => {
    const [newRestaurant, setNewRestaurant] = useState(restaurantList);
    const [masterRestaurant] = useState(restaurantList);

    

    const handleClick =()=>{
        const filteredRestaurants = newRestaurant.filter((restaurant)=> restaurant?.info?.avgRating>4);
        setNewRestaurant(filteredRestaurants);
        // newRestaurant = restaurantList.filter((restaurant)=> restaurant?.info?.avgRating>4);
        console.log("Restaurantlist", newRestaurant);
    }

    return(
        <>
        <Searchbar collection={masterRestaurant} updater={setNewRestaurant}/>
        {/* <button className="btn btn-sm btn-info" onClick={handleClick}>Filter</button> */}
        <div className="d-flex flex-wrap justify-content-center py-4" style={{gap:"20px"}}>
            {
                newRestaurant.map((restaurant)=>
                    <Restaurantcard key={restaurant?.info?.id} {...restaurant?.info}/>
                )
            }
        </div>
        </>
    )
}

export default Cardcontainer;

//useState, useEffect