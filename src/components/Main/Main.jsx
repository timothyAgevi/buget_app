import React from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider}from '@material-ui/core'
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form'
import List from './List/List';

const Main = () => {
    const classes =useStyles();
  return (
<Card className={ classes.root}>
    <CardHeader title = "Buget Manager" subheader= "Powered by timothyAgevi"/>
    <CardContent>
    <Typography align ="center" variant="h5">  total Balance</Typography>
    <Typography variant ="subtitle1" style={{ lineHeight:'1.5em',marginTop:'20px'}}>
        {/* infoCard */}
        try saying :Add income for $100 incategory Salary for monday
    </Typography>
    <Divider/>
   <Form/>
    </CardContent>
   <CardContent className={classes.CardContent}>
       <Grid container spacing ={2}>
           <Grid item xs={12}>
            <List/>
           </Grid>

       </Grid>

   </CardContent>
    
</Card>
    )
}

export default Main