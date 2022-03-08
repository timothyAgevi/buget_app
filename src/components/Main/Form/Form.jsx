import React,{useState,useContext,useEffect} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 }from 'uuid';
import { useSpeechContext } from '@speechly/react-client';
import useStyles from './styles'
import { incomeCategories,expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
const initialState={
  amount:'',
  category:'',
  type:'Income', 
  date:formatDate(new Date())
}

const Form = () => {
    const classes =useStyles();
    const {formData,setFormData}=useState(initialState);
    const {addTransaction}=useContext(ExpenseTrackerContext);
    const {segment}=useSpeechContext();
    // const [open,setOpen]=React.useState(false)
    
    const createTransaction=()=>{
      const transaction= {...formData,amount:Number(formData.amount),id :uuidv4()}
      addTransaction(transaction);
      setFormData(initialState);
    };
//use effect:call specific function at certain point in components,e,g start,onchange
//logic to add transaction usig voice
//useEffecrt, 2parameters : 1.callback function 2.dependanct array
useEffect( () =>{
 if(segment){//if segment exists
    if(segment.intent.intent==='add_expense'){
      setFormData({...formatDate,type:'Expense'})
    } else if(segment.intent.intent==='add_income'){
      setFormData( { ...formData,type:'Income'});
    }else if( segment.isFinal && segment.intent.intent==="create_transaction"){
      return createTransaction()
    }else if (segment.isFinal && segment.intent.intent==="cancel_transaction"){
      return setFormData(initialState);
    }
    segment.entities.forEach( (s)=>{
      const category =`${s.value.charAt(0)}${s.value.slice(1)}`
      switch (s.type){
        case 'amount':
          setFormData({...formData,amount:s.value})
          break;
          case 'category':
          setFormData({...formData,category:s.value})
          break;
          case 'date':
          setFormData({...formData,date:s.value})
          break;
          default:
            break;
      }
    })
 }
},[segment,createTransaction,formData,setFormData])

  
   const selectedCategories =formData?.type ==='Income'? incomeCategories:expenseCategories;

  return (
   <Grid container spacing ={2}>
     <Grid items xs={12}> 
     <Typography align ="centre" variant ="subtitle2"gutterBottom>
          { segment && segment.words.map(  (w)=>w.value).join(" ")}
     </Typography>  
     </Grid>

     <Grid item xs ={6}>
       <FormControl fullWidth>
        <InputLabel> Type </InputLabel>
        <Select value ={formData?.type} onChange={ (e)=>setFormData({...formData,type:e.target.value})}>
        {/* {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} */}
         <MenuItem value ="Income">Income</MenuItem>  
         <MenuItem value ="Expense">Expense</MenuItem> 
        </Select>
       </FormControl>
     </Grid>

     <Grid item xs ={6}>
      <FormControl fullWidth>
       <InputLabel> Category</InputLabel>
       <Select value ={formData?.category} onChange={ (e)=>setFormData({...formData,category:e.target.value})}>
       {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
        

       </Select>
      </FormControl>
     </Grid>

     <Grid item xs ={6}>
         <TextField type= "number" label ="Amount" fullWidth value ={formData?.amount} onchange={(e)=>setFormData({...formData,amount : e.target.value}) }/>
       </Grid>

       <Grid item xs ={6}>
         <TextField  type= "date" label ="Date" fullWidth value ={formData?.date} onchange={(e)=>setFormData({...formData,date: formatDate(e.target.value)}) }/>
       </Grid>
       <Button className={classes.button} variant="outlined" color ="primary" fullWidth onclick={createTransaction}>Create </Button>

   </Grid>
  ) 
}

export default Form ;