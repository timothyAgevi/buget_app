import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories,expenseCategories,resetCategories } from "./constants/categories";


//{  id:1,type:'Income',amount:50,category:'Salary'}
//{  id:1,type:'Income',amount:50,category:'Salary'}
//{  id:1,type:'Income',amount:50,category:'Business'}


// export const incomeCategories = [
//     { type: 'Salary', amount: 0, color: incomeColors[0] },
//     { type: 'Business', amount: 0, color: incomeColors[1] },
//     { type: 'Extra income', amount: 0, color: incomeColors[2] },



//custom hook:arrow function that starts with use
const useTransactions=(title)=>{
   resetCategories();
   const {transactions}=useContext(ExpenseTrackerContext);
   const transactionsPerType = transactions.filter( (t)=>t.type ===title);
    // reduce : sum array values to one value
   const total =transactionsPerType.reduce(   (acc,currVal)=>acc+=currVal.amount,0);
  const categories = title==='Income'?incomeCategories:expenseCategories

  console.log({transactionsPerType,total,categories});

  transactionsPerType.forEach( (t)=>{
      const category=categories.find( (c)=>c.type===t.category)
      if(category)category.amount +=t.amount;
  })
  // categories where amount =<0
  const filteredCategories =categories.filter( (c)=>c.amount>0)
   
  const charData={
      datasets:[{
          data:filteredCategories.map( (c)=>c.amount),
          backgroundColor:filteredCategories.map( (c)=>c.color)
      }],
      labels:filteredCategories.map( (c)=>c.type)
  }
return{ filteredCategories,total,charData}
}