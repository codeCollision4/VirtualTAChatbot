import { Modal, IconButton, Typography, Box, TextField, Button, Grid, List, ListItem, Link } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {SnackbarComponent} from 'Components'

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
    overflow: "hidden",
    overflowY: "scroll",
    textOverflow: "ellipsis",
    // border: '2px soslid #000',
    // boxShadow: 24,
    p: 4,
};
const GROUP_MEMBERS = ['Dax Collison (Product Owner)', 'Christopher Vo', 'Varun Todupunoori', 'Zain Ishaq', 'Kate Kim', 'Rick Gao']

export const AboutUsModal = ({open, setOpen}) => {
    // const [open, setOpen] = React.useState(false);
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

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <IconButton sx={{position:'fixed', right:0, top:0}} color="primary" onClick={handleClose}>
                        <CloseRoundedIcon  />
                    </IconButton>
                    <Typography variant="h6" color="text.primary">
                        This project was created by:
                    </Typography>
                    <List
                        sx = {{
                        color: 'text.primary',
                        listStyleType: 'disc',
                        pl: 2,
                        '& .MuiListItem-root': {
                        display: 'list-item',
                        color: 'text.primary',
                        },
                        }}>
                        {GROUP_MEMBERS.map((member, index) =>
                            <ListItem >
                                {member}
                            </ListItem>
                        )}
                    </List>
                    <Link variant="h8" href={"https://github.com/codeCollision4/VirtualTAChatbot"} color="text.primary" target="_blank" rel="noopener">
                        Link to github: https://github.com/codeCollision4/VirtualTAChatbot
                    </Link>
                </Box>
            </Modal>
        </div>
    )
}