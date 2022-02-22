import React,{ userReducer,createContext}from 'react';

const initialState = [];

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

