//This help us to track the number of elements are there in oure basket.
import React, { createContext, useContext, useReducer } from "react";

//This is a data layer
export const StateContext = createContext();

//Build a provider --> wrap our entair app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//this help us to use the thing in components
export const useStateValue = () => useContext(StateContext);
