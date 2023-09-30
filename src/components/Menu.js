import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import useMenu from  '../custom_hooks/useMenu';
;
const Menu = ({isActive}) => {
    const { id } = useParams();
    console.log("Custom", id);
    const menuList = useMenu(id);
    console.log("menuList", menuList);
    const [menuOpenState, setMenuOpenState] = useState(Array(menuList.normal_items.length).fill(false));
    
    const handleActiveIndex = (val) => {
        const newMenuOpenState = [...menuOpenState];
        console.log("new menu open state", newMenuOpenState);
        newMenuOpenState[val] = !newMenuOpenState[val];
        setMenuOpenState(newMenuOpenState); 
    }

    return  (
        <div className="container">
            <h1>This is my Menu page</h1>
            {
                    menuList?.normal_items.map((item, index) => {
                        return (
                            <div key={item?.card?.card?.title}>
                                
                                <h3 onClick={() => handleActiveIndex(index)}>{item?.card?.card?.title}</h3>
                                {menuOpenState[index]  && item?.card?.card?.itemCards.map((menuItem, index) => {
                                    return (
                                         <h6 className="text-danger" key={menuItem?.card?.info?.id}>{index + 1}. {menuItem?.card?.info?.name}</h6>
                                    )
                                })
                                }
                            </div>
                        )
                    })
                }
            {
                menuList?.nested_items.map((nestedItem, index) => {
                    return (
                        <div key={nestedItem?.card?.card?.title}>
                            <h3>{nestedItem?.card?.card?.title}</h3>
                            {
                                nestedItem?.card?.card?.categories.map((itemcategory, index) => {
                                    return (
                                        <div key={itemcategory?.title}>
                                            <h5 className="text-secondary">{itemcategory?.title}</h5>
                                            <div>
                                                {
                                                    itemcategory?.itemCards.map((itemcard, index) => {
                                                        return (
                                                            <h6 key={itemcard?.card?.info?.id} className="text-danger">{index + 1}. {itemcard?.card?.info?.name}</h6>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Menu;