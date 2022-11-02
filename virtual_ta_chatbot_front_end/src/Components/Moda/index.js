import { Modal, IconButton, Typography, Box, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

export const Moda = ({setMessage}) => {
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
        const mf = document.getElementById('formula');
        setMessage(mf.getValue())
        handleClose()
    }, [])

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
                    <button onClick={handleClose}>close</button>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'center'}}>
                        Type in Latex field. For specific inputs put "\" in front. Ex: \sqrt()
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <math-field id="formula" virtual-keyboard-mode="auto"></math-field>
                        <script src="https://unpkg.com/mathlive"></script>
                        <TextField id="latex" label="LaTex" variant="standard" style={{marginLeft:150}} onChange={handleChange} formula={formula}/>
                        
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 10 }}>
                        <CopyToClipboard onCopy={onCopy} text={formula} style={{marginLeft:220}}>
                            <button>Enter</button>
                        </CopyToClipboard>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}