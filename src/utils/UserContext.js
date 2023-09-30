import { createContext } from "react";

//create context object named as UserContext;

const UserContext = createContext({
    user : "shubham",
    location : "Manchester"
});


export default UserContext;
