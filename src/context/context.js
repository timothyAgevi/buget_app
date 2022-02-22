import React,{ useReducer,createContext}from 'react';

const initialState = [];

//create own initialstate
export const ExpenseTrackerContext = createContext(initailState);

//functional Component
 export const Provider = ({ children})=>{
   //return jsx 
   return(
       <ExpenseTrackerContext.Provider value ={{appName:'Expense Tracker'}}>
           {children}
       </ExpenseTrackerContext.Provider>
   )
 }

