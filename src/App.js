import React from 'react'
import {Details} from './components';
import {Grid} from '@material-ui/core'
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