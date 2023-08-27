import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Body from "./Body";
import ErrorElement from "./ErrorElement";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path:"",
                element : <Body/> 
            },
            {
                path:"about",
                element : <About/> 
            },
            {
                path:"contact",
                element : <Contact/> 
            },
            {
                path:"cart",
                element : <Cart/>
            }
        ]
        }
]);


export default appRouter;



