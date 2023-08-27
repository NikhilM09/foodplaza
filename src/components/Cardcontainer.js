import Restaurantcard from "./Restaurantcard";
import restaurantList from "../utils/dummyData";
import { useState, useEffect } from 'react';
import Searchbar from "./Searchbar";
import Filter from "./Filter";

const Cardcontainer = () => {
    const [newRestaurant, setNewRestaurant] = useState([]);
    const [masterRestaurant, setMasterRestaurant] = useState([]);

    const getRestaurants = async () => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("response data", json);
        setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("masterRestaurant", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, [])

//element variable method

    // let message;

    // if (masterRestaurant.length !== 0) {
    //     message = (<>
    //         <Searchbar collection={masterRestaurant} updater={setNewRestaurant} />
    //         <Filter collection={masterRestaurant} update={setNewRestaurant} />
    //         <div className="d-flex flex-wrap justify-content-center py-4" style={{ gap: "20px" }}>
    //             {
    //                 newRestaurant.length !== 0 ?
    //                     newRestaurant.map((restaurant) =>
    //                         <Restaurantcard key={restaurant?.info?.id} {...restaurant?.info} />
    //                     ) : <h1>No restaurants found</h1>
    //             }
    //         </div>
    //     </>)
    // }

    // else {
    //     message = (<h1>Restaurants are loading</h1>);
    // }

    // return (
    //     message
    // )

    //if else statement
    // if (masterRestaurant.length !== 0) {
    //     return (
    //         <>

    //             <Searchbar collection={masterRestaurant} updater={setNewRestaurant} />
    //             <Filter collection={masterRestaurant} update={setNewRestaurant} />
    //             <div className="d-flex flex-wrap justify-content-center py-4" style={{ gap: "20px" }}>
    //                 {
    //                     newRestaurant.length !== 0 ?
    //                         newRestaurant.map((restaurant) =>
    //                             <Restaurantcard key={restaurant?.info?.id} {...restaurant?.info} />
    //                         ) : <h1>No restaurants found</h1>
    //                 }
    //             </div>
    //         </>
    //     )
    // }
    // else{
    //     return(<h1>Restaurants are loading</h1>)
    // }


    //ternary operator
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

//short circuit operator
    // return(
    //     masterRestaurant.length !== 0 && <h1>Restaurants are loading</h1>
    // )

}

export default Cardcontainer;

//useState, useEffect

//separate component filter
//filter component : different buttons
//different functions onClick
//data


//conditional rendering
//1) if else statement