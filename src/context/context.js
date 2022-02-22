import React,{ useReducer,createContext}from 'react';

import  contextReducer from './contextReducer';
const initialState = [];

//create own initialstate
export const ExpenseTrackerContext = createContext(initialState);

//functional Component
 export const Provider = ({ children})=>{
//useReducer hook i.e complex version of useState
const [transactions, dispatch] = useReducer(contextReducer,initialState);//reducer functiondefining hoe we change our state
//Actions/action creators
 const deleteTransaction =(id)=>{
   dispatch({type:'DELETE_TRANSACTION',payload:id})
 }

 const addTransaction= ()=>{
   dispatch({ type:'ADD_TRASACTION',payload:transaction});
 }
   //return jsx 
   return(
       <ExpenseTrackerContext.Provider value ={{appName:'Expense Tracker'}}>
           {children}
       </ExpenseTrackerContext.Provider>
   )
 }

