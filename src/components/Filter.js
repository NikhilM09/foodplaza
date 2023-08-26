

const Filter = ({collection, update}) => {

    const handleRating = () =>{
        const filteredData = collection.filter((item)=>item?.info?.avgRating > 4);
        console.log("filter on rating", filteredData);
        update(filteredData);
    }

    const handleLowCost = () =>{
        const filteredData = collection.filter((item)=>parseInt(item?.info?.costForTwo.replace(/\D/g, ""))<300);
        console.log("filter on cost", filteredData);
        update(filteredData);
    }

    const handleVeg = () => {
        const filteredData = collection.filter((item)=>item?.info?.veg);
        console.log("filter on veg", filteredData);
        update(filteredData);
    }

    const handleNonVeg = () => {
        const filteredData = collection.filter((item)=>!item?.info?.veg);
        console.log("filter on non-veg", filteredData);
        update(filteredData);
    }

    const handleDelivery = () => {
        const filteredData = collection.filter((item)=>item?.info?.sla?.deliveryTime < 30);
        console.log("filter on delivery time", filteredData);
        update(filteredData);
    }

    const handleReset = () => {
        update(collection);
    }


    return (
        <div className="container text-center">
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleRating}>Rating 4.0+</button>
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleLowCost}>Less than Rs.300</button>
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleVeg}>Pure Veg</button>
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleNonVeg}>Non-Veg</button>
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleDelivery}>Fast Delivery</button>
            <button className = "btn btn-sm btn-dark mx-2" onClick={handleReset}>Reset</button>
        </div>
    )
}


export default Filter;