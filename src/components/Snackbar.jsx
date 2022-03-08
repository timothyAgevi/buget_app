import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackbar = () => {
    const classes= useStyles();
  return (
    <div>
<Snackbar
anchorOrigin={ { vertical:'top',horizontal:'right'}}
open ={true}
autoHideDuration={3000}
onclose={handleClose}
>
<MuiAlert/>
</Snackbar>
    </div>
  )
}

export default CustomizedSnackbar