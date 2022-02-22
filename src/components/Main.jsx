import React from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider}from '@material-ui/core'
import useStyles from './syles'
const Main = () => {
    const classes =useStyles();
  return (
<Card className={ classes.root}>
    <CardHeader title = "Buget Manager" subheader= "Powered by Speechly"/>
    <CardContent>
    <Typography align ="center" variant="h5">  total Balance</Typography>
    <Typography variant ="subtitle1" style={{ lineHeight:'1.5em',marginTop:'20px'}}>
        {/* infoCard */}
        try saying :Add income for $100 incategory Salary for monday
    </Typography>
    <Divider/>
     {/* Form */}
    </CardContent>
   
    
</Card>
    )
}

export default Main