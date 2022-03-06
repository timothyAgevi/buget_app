import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories,expenseCategories,resetCategories } from "./constants/categories";

//custom hook:arrow function that starts with use
const useTransactions=(title)=>{
   resetCategories();
}