import { useState, useEffect } from 'react';
import { api_url } from "../utils/config"


const useRestaurant = () => {
    const [newRestaurant, setNewRestaurant] = useState([]);
    const [masterRestaurant, setMasterRestaurant] = useState([]);
    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        try {
            const data = await fetch(api_url);
            const json = await data.json();
            console.log("response data", json);
            setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setMasterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log("masterRestaurant", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (error) {
            console.log(error);
        }
    }

    const restaurantList = {
        new_restaurant: newRestaurant,
        master_restaurant: masterRestaurant,
        update : setNewRestaurant
    }
    console.log(restaurantList);
    return restaurantList;
}

export default useRestaurant;