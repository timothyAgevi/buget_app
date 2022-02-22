import React from 'react'
import Details from './components/Details/Details'
import {Grid} from '@material-ui/core'
import useStyles from "./styles"
const App = () => {
  return (
   <Grid  container spacing={0} alignItems="centre" justify ="centre" style={{height:'100vh'}}>
       <Grid item xs= {12} sm={4}>
           <Details/>
       </Grid>

       <Grid item xs= {12} sm={4}>
           Main
       </Grid>

       <Grid item xs= {12} sm={4}>
           <Details/>
       </Grid>
   </Grid>
  )
}

export default App