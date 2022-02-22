import React from 'react'
import { Card,CardHeader,CardContent,Typography }from '@material-ui/core';
import {Doughnut} from'react-chartjs-2'
import useStyles from './styles'

const Detail = () => {
    const classes = useStyles();
  return (
    <Card>
        <CardHeader title="Income"/>
        <CardContent>
            <Typography variant='h5'> $50</Typography>
            <Doughnut data ="Data"/>
        </CardContent>
    </Card>
  )
}

export default Detail