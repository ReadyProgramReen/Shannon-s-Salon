import { createContext } from "react";
import { stylist } from "../assets/assets_frontend/assets";

export const AppContext = createContext()

// create context provider context
const AppContextProvider = (props) =>{

    const value = {
        stylist

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider