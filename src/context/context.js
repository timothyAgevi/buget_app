import React,{ useReducer,createContext}from 'react';

import  contextReducer from './contextReducer';
const initialState = [];

//create own context with initialstate
export const ExpenseTrackerContext = createContext(initialState);

//functional Component
 export const Provider = ({ children})=>{
//useReducer hook i.e complex version of useState
//eslint-disable-next-line
const [transactions, dispatch] = useReducer(contextReducer,initialState);//reducer function defining how we change our state
//Actions/action creators
//actions :type +payload
 const deleteTransaction =(id)=>{dispatch({type:'DELETE_TRANSACTION',payload:id}) }

 const addTransaction= (transaction)=>{dispatch({ type:'ADD_TRASACTION',payload:transaction});//err transactions
 }
   //return jsx 
   return(
       <ExpenseTrackerContext.Provider value ={{
         transactions,
        deleteTransaction,
        addTransaction
       }}>
           {children}
       </ExpenseTrackerContext.Provider>
   )
 }

