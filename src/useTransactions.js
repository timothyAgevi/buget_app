import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories,expenseCategories,resetCategories } from "./constants/categories";

//custom hook:arrow function that starts with use
const useTransactions=(title)=>{
   resetCategories();
   const {transactions}=useContext(ExpenseTrackerContext);
   const transactionsPerType = transactions.filter( (t)=>t.type ===title);
    // reduce : sum array values to one value
   const total =transactionsPerType.reduce(   (acc,currVal)=>acc+=currVal.amount,0);
  const categories = title==='Income'?incomeCategories:expenseCategories

  console.log({transactionsPerType,total,categories});
}