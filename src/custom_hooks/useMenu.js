import { useState, useEffect } from 'react';


const useMenu = (res_id) => {
    const [menu, setMenu] = useState([]);
    const [nestedMenu, setNestedMenu] = useState([]);
    useEffect(() => {
        getMenuData();
    }, []);

    const normal_category = 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    const nested_category = 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory';

    const getMenuData = async () => {

        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${res_id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log("Menu data", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) =>
            item?.card?.card['@type'] === normal_category
        )

        const nestedMenuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) =>
            item?.card?.card['@type'] === nested_category
        )
        setMenu(menuCards);
        setNestedMenu(nestedMenuCards);
        console.log("normal cards", menuCards);
        console.log("nested cards", nestedMenuCards);
    }

    const menuList = {
        normal_items: menu,
        nested_items: nestedMenu
    }
    console.log("menuList", menuList);
    return menuList;
}


export default useMenu;