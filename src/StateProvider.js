import React, { createContext, useContext, useReducer } from "react";
// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
