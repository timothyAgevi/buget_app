// Reducer => a function that takes in old state,and an action=>new state ..
const contextReducer= (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            const transactions = state.filter(  ( t) =>t.id !== action.payload);
            return transactions;

        
        case 'ADD_TRANSACTION':
            const transaction =[action.payload,...state];
            return transactions;
        default:   
              break;
    }


 
}
export default contextReducer;