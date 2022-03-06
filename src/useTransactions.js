import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories,expenseCategories,resetCategories } from "./constants/categories";

//custom hook:arrow function that starts with use
const useTransactions=(title)=>{
   resetCategories();
   const {transactions}=useContext(ExpenseTrackerContext);
   const selectedCategories = transactions.filter( (t)=>t.type ===title);
    // reduce : sum array values to one value
   const total =selectedCategories.reduce(   (acc,currVal)=>acc+=currVal.amount,0);
  const categories = title==='Income'?incomeCategories:expenseCategories

}