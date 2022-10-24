import React, { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [activeFilters, setActiveFilters] = useState([])
    return (
        <AuthContext.Provider value={{activeFilters, setActiveFilters}}>
            {props.children}
        </ AuthContext.Provider>
    )
}