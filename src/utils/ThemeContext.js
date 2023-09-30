import { createContext } from "react";

//create context object named as UserContext;

const ThemeContext = createContext({
    isDark : false,
});


export default ThemeContext;
