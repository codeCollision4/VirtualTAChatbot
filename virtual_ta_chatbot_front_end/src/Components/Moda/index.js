import { Modal, IconButton, Typography, Box, TextField, Button, Grid } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {SnackbarComponent} from 'Components'
import 'mathlive';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    maxWidth:600,
    height: "40%",
    maxHeight: 450,
    bgcolor: 'background.paper',
    // border: '2px soslid #000',
    // boxShadow: 24,
    p: 4,
};

export const Moda = ({showSnackFunc, message, setMessage}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [copied, setCopied] = React.useState(false);

    const [formula, setFormula] = useState('');
    const handleChange = event => {
        // update textarea value
        setFormula(event.target.value);
        console.log(event.target.value);
        const mf = document.getElementById('formula');
        mf.setValue(event.target.value,{suppressChangeNotifications: true});
    };

    const onCopy = React.useCallback(() => {
        setCopied(true);
    }, [])
    const sendButtonPress = () => {
        showSnackFunc("Equation Sent to Chat")
        setMessage(message + formula)
    }
    return (
        <div>
            <IconButton aria-label="Equation" onClick={handleOpen} color="primary" >
                <FunctionsRoundedIcon style={{marginTop:0, paddingLeft: "0.2em",paddingRight: "0.2em",}}  />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <IconButton sx={{position:'fixed', right:0, top:0}} color="primary" onClick={handleClose}>
                        <CloseRoundedIcon  />
                    </IconButton>
                    <Typography style={{textAlign: 'center'}} color="text.primary" id="modal-modal-title" variant="h6" component="h2">
                    Type in Latex field. For specific inputs put "\" in front.
                    </Typography>
                    <Typography style={{textAlign: 'center'}} color="text.primary" id="modal-modal-title" variant="h6" component="h2">
                    Ex: \sqrt()
                    </Typography>
                    <Typography style={{}} color="text.primary" id="modal-modal-description" sx={{ mt: 5 }}>
                        <math-field style={{textAlign: 'center'}} id="formula" virtual-keyboard-mode="disabled"></math-field>
                        <script src="https://unpkg.com/mathlive"></script>
                        <TextField  id="latex" label="LaTex" variant="standard" onChange={handleChange} formula={formula}/>
                    </Typography>
                    <Grid style={{marginVertical:5}} >
                        <CopyToClipboard onCopy={onCopy} text={formula}>
                            <Button onClick={() => showSnackFunc("Equation Copied Into Clipboard")} >Copy</Button>
                        </CopyToClipboard>
                        <Button onClick={sendButtonPress}>Send to Chat</Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}