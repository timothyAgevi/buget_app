// Reducer => a function that takes in old state,and an action=>new state ..
const contextReducer= (state,action)=>{
    let transactions;

    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions = state.filter(  ( t) =>t.id !== action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions));


            return transactions;

        
        case 'ADD_TRANSACTION':
            transactions=[action.payload,...state];
            return transactions;
        default:   
              return state;
    }


 
}
export default contextReducer;