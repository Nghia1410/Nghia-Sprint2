import React, {createContext, useState} from "react";

export const ValueIconCartContext = createContext();
export const QuantityProvider = ({children}) => {
    const [iconQuantity, setIconQuantity] = useState(0);
    return (
        <ValueIconCartContext.Provider value={{iconQuantity, setIconQuantity}}>
            {children}
        </ValueIconCartContext.Provider>
    );
};