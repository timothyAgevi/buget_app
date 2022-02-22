import React,{ userReducer,createContext}from 'react';

const initialState = [];

export const ExpenseTrackerContext = createContext(initailState);

//functional Component
 export const Provider = ({ children})

