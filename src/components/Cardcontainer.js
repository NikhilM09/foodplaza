import Restaurantcard from "./Restaurantcard";
import restaurantList from "../utils/dummyData";
import { useState, useEffect } from 'react';
import Searchbar from "./Searchbar";


const Cardcontainer = () => {
    const [newRestaurant, setNewRestaurant] = useState([]);
    const [masterRestaurant, setMasterRestaurant] = useState([]);

    const getRestaurants = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("response data", json);
        setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setMasterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("masterRestaurant", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() =>{
        getRestaurants();
    }, [])
    

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