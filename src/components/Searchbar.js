import { useState, useEffect } from 'react';

const Searchbar = ({collection, updater}) => {
    const [searchText, setSearchText] = useState("");
    const searchRestaurant = () =>{
       const filteredRestaurants = collection.filter((restaurant)=>restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
       updater(filteredRestaurants);
    }
    
    useEffect(()=>{
        console.log("useEffect is called");
    },[]);


    console.log("component is rendered");
    return(
        <div className="container py-4 d-flex justify-content-center">
            <input type="text" className="custom_input" 
            value={searchText} onChange={(e)=>setSearchText(e.target.value)}
            placeholder="Enter name of restaurant"/>
            <button className="btn btn-sm btn-success mx-2" onClick={searchRestaurant}>Search🥸</button>
        </div>
    )
}

export default Searchbar;