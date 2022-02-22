import React from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider}from '@material-ui/core'
import useStyles from './syles'
const Main = () => {
    const classes =useStyles();
  return (
<Card className={ classes.root}>
    <CardHeader title = "Buget Manager" subheader= "Powered by Speechly"/>
</Card>
    )
}

export default Main