import * as React from 'react';
import {Snackbar, Alert, Button} from '@mui/material';

export const SnackbarComponent = ({action, open, message, setOpen, position}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    return(
        <div>
            <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            // message={message}
            action={action}
            >
            <Alert onClose={handleClose} severity="success">
              {message}
            </Alert>
            </Snackbar>
        </div>
    )
}