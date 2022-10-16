import { Modal, IconButton } from '@material-ui/core';
import * as React from 'react';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Moda = ({}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton aria-label="Equation" onClick={handleOpen} color="secondary" >
                <FunctionsRoundedIcon style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <button onClick={handleClose}>close</button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Click around the modal to find the text box and try typing the quad formula
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <math-field virtual-keyboard-mode="mode"></math-field>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}