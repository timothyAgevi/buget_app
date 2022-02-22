import React,{ useReducer,createContext}from 'react';

const initialState = [];

//create own initialstate
export const ExpenseTrackerContext = createContext(initialState);

//functional Component
 export const Provider = ({ children})=>{
//useReducer hook i.e complex version of useState
const [state, dispatch] = useReducer(reducer,initialState, init)

   //return jsx 
   return(
       <ExpenseTrackerContext.Provider value ={{appName:'Expense Tracker'}}>
           {children}
       </ExpenseTrackerContext.Provider>
   )
 }

