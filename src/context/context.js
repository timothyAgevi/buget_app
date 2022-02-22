import React,{ useReducer,createContext}from 'react';

import  contextReducer from './contextReducer';
const initialState = [];

//create own initialstate
export const ExpenseTrackerContext = createContext(initialState);

//functional Component
 export const Provider = ({ children})=>{
//useReducer hook i.e complex version of useState
const [state, dispatch] = useReducer(reducer,initialState);//reducer functiondefining hoe we change our state

   //return jsx 
   return(
       <ExpenseTrackerContext.Provider value ={{appName:'Expense Tracker'}}>
           {children}
       </ExpenseTrackerContext.Provider>
   )
 }

