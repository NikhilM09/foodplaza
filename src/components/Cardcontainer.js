import Restaurantcard from "./Restaurantcard";
import restaurantList from "../utils/dummyData";
import { useState, useEffect } from 'react';
import Searchbar from "./Searchbar";
import Filter from "./Filter";

const Cardcontainer = () => {
    const [newRestaurant, setNewRestaurant] = useState([]);
    const [masterRestaurant, setMasterRestaurant] = useState([]);

    const getRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("response data", json);
        setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("masterRestaurant", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        getRestaurants();
    }, [])


    const handleClick = () => {
        const filteredRestaurants = newRestaurant.filter((restaurant) => restaurant?.info?.avgRating > 4);
        setNewRestaurant(filteredRestaurants);
        // newRestaurant = restaurantList.filter((restaurant)=> restaurant?.info?.avgRating>4);
        console.log("Restaurantlist", newRestaurant);
    }

    return (
        <>
            {
                masterRestaurant.length !== 0 ?
                    <>
                        <Searchbar collection={masterRestaurant} updater={setNewRestaurant} />
                        <Filter collection={masterRestaurant} update={setNewRestaurant} />
                        <div className="d-flex flex-wrap justify-content-center py-4" style={{ gap: "20px" }}>
                            {
                                newRestaurant.length !== 0 ?
                                    newRestaurant.map((restaurant) =>
                                        <Restaurantcard key={restaurant?.info?.id} {...restaurant?.info} />
                                    ) : <h1>No restaurants found</h1>
                            }
                        </div>
                    </>
                    : <h1>Restaurants are loading</h1>
            }
        </>
    )
}

export default Cardcontainer;

//useState, useEffect

//separate component filter
//filter component : different buttons
//different functions onClick
//data