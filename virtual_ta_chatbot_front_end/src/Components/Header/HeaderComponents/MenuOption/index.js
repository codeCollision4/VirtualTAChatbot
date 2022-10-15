import {SwipeableDrawer, Box, MenuItem, IconButton, ListItem, List, ListItemText, Divider, Collapse} from '@material-ui/core';
import {Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React,{useState, useEffect} from 'react'
import { useTheme } from "@mui/material/styles";
import {HistoryMenu} from '../'

export const MenuOption = ({memory, setConversation}) => {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [historyShow, setHistoryShow] = useState(false)
    const [currentMemory, setCurrentMemory] = useState()
    const toggleDrawer = (open) => (event) => {
        if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(open);
    };
    const theme = useTheme()
    useEffect(() => {
        let mem = [...memory]
        setCurrentMemory(mem)
    }, []);
    const historyPress = () => {
        setExpanded(expanded=> !expanded)
        // setOpen(false)
        // setConversation()
    }
    const historyOptionPress = (mem) => {
      setConversation(mem)
      setOpen(false)
    }
    const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          color="inherit"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <List>
              <ListItem >
                <ListItemButton onClick={historyPress} >
                  <ListItemIcon  >
                   <HistoryIcon style={{ color: theme.palette.text.primary }} 
                   //Dont ask why I had to set the style just to change the color...
                   />
                  </ListItemIcon>
                  <ListItemText primary={'History'} />
                </ListItemButton>
            </ListItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List component="div" >
                  {currentMemory?.map((mem, index) => (
                    <ListItemButton key={index} sx={{ pl: 4 }} onClick={() => historyOptionPress(mem)} disabled={mem===null} >
                      <ListItemIcon>
                        </ListItemIcon>
                      <ListItemText primary={mem!==null ? "History " + (index + 1) : "Not Available" } />
                      </ListItemButton> 
                  ))}
                  {/* <ListItemButton sx={{ pl: 4 }} onClick={historyOptionPress} >
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                  </ListItemButton> */}
                </List>
            </Collapse>
          </List>
          <Divider />
        </Box>
      );
    return(
    <div>
        <IconButton 
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none',}, }}>   
            <MenuIcon />
            </IconButton>

            <Drawer            
                anchor="right"
                variant="temporary"
                color={theme.palette.background.default}
                open={open}
                onClose={toggleDrawer(false)}>
                
                <Box>
                {list}
                </Box>
            </Drawer>
            <HistoryMenu  />
    </div>
    )
}
