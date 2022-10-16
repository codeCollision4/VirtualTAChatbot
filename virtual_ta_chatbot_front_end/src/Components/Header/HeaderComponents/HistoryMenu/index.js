import {SwipeableDrawer, Box, MenuItem, IconButton, Drawer, ListItem, List, ListItemText, Divider} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import React,{useState} from 'react'


export const HistoryMenu = ({}) => {
    const [open, setOpen] = useState(false)
    const toggleDrawer = (open) => (event) => {
        if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(open);
    };
    const historyPress = () => {
        console.log("a");
    }
    const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['History'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <HistoryIcon onClick={historyPress} /> : <MenuIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      );
    return(
    <div>
        {/* <IconButton 
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none',}, }}>   
            <MenuIcon />
            </IconButton> */}

            <Drawer            
                anchor="right"
                variant="temporary"
                open={open}
                onClose={toggleDrawer(false)}>
                
                <Box>
                {list}
                </Box>
            </Drawer>
    </div>
    )
}
