import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackbar = (open,setOpen) => {
    const classes= useStyles();

    const handleClose =  (event,reason) =>{ 
        if(reason==='clickaway')return;
        setOpen(false);
    }
  return (
    <div>
<Snackbar
anchorOrigin={ { vertical:'top',horizontal:'right'}}
open ={true}
autoHideDuration={3000}
onclose={handleClose}
>
<MuiAlert   onClose={handleClose} severity ="success" elevation={6} variant="filled">
    
    transaction sucessfully created
    </MuiAlert> 
</Snackbar>
    </div>
  )
}

export default CustomizedSnackbar