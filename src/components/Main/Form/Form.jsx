import React from 'react'
import { Textfiels,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
 import useStyles from './styles'

const Form = () => {
    const classes =useStyles();
  return (
   <Grid container spacing ={2}>
     <Grid items xs={12}> 
     <Typography align ="centre" variant ="subtitle2"gutterBottom>
          ...
     </Typography>
     </Grid>

     <Grid item xs ={6}>
       <FormControl fullWidth>
        <InputLabel> Type </InputLabel>
        <Select>
            <MenuItem value ="Income">Income</MenuItem>
            <MenuItem value ="Expense">Expense</MenuItem>
        </Select>
       </FormControl>
     </Grid>

     <Grid item xs ={6}>
      <FormControl fullWidth>
       <InputLabel> Category</InputLabel>
       <Select>
       <MenuItem value ="business">Business</MenuItem>
        <MenuItem value ="salary">Salary</MenuItem>
       </Select>
      </FormControl>
     </Grid>

     <Grid item xs ={6}>
         <Textfield  type= "number" label ="Amount" fullWidth/>
       </Grid>

       <Grid item xs ={6}>
         <Textfield  type= "date" label ="Date" fullWidth/>
       </Grid>
       <Button className={classes.button} variant="outlined" color ="primary"> </Button>

   </Grid>
  )
}

export default Form