import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Body from "./Body";
import ErrorElement from "./ErrorElement";
import Menu from "./Menu";
import {lazy, Suspense} from 'react';
import {useState} from 'react'

const Instamart = lazy(()=>import("./Instamart"))

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App userDetails={{name:'nikhil', location:'mumbai'}}/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path:"",
                element : <Body userDetails={{name:'nikhil', location:'mumbai'}}/> 
            },
            {
                path:"about",
                element : <About/> ,
                // children: [
                //     {
                //         path:"profile",
                //         element : <ProfileClass/>
                //     },
                // ]
            },
            {
                path:"contact",
                element : <Contact/> 
            },
            {
                path:"cart",
                element : <Cart/>
            },
            {
                path:":id",
                element : <Menu/>
            },
            {
                path:"instamart",
                element : <Suspense fallback={<h1 className="text-danger">Instamart is loading</h1>}><Instamart/></Suspense>
            }
        ]
        }
]);


export default AppRouter;



