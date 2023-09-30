import Restaurantcard from "./Restaurantcard";
import restaurantList from "../utils/dummyData";
import { useState, useEffect } from 'react';
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import useRestaurant from "../custom_hooks/useRestaurant";
import { useContext } from 'react';
import UserContext from "../utils/UserContext";

const Cardcontainer = ({ userDetails }) => {
    const restaurantList = useRestaurant();
    const userData = useContext(UserContext);
    return (
        <>
            {
                restaurantList?.master_restaurant.length !== 0 ?
                    <>
                        <input
                            type="text"
                            value={userData?.userDetails?.user}
                            onChange={(e) => userData?.method({
                                user: e.target.value,
                                location: 'dombivali'
                            })}
                            placeholder="enter name of developer" />
                        <Searchbar collection={restaurantList?.master_restaurant} updater={restaurantList?.update} />
                        <Filter collection={restaurantList?.master_restaurant} update={restaurantList?.update} />
                        <div className="d-flex flex-wrap justify-content-center py-4" style={{ gap: "20px" }}>
                            {
                                restaurantList?.new_restaurant.length !== 0 ?
                                    restaurantList?.new_restaurant.map((restaurant) =>
                                        <Restaurantcard
                                            key={restaurant?.info?.id}
                                            {...restaurant?.info}
                                            userDetails={{ name: 'nikhil', location: 'mumbai' }} />
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
