import {ListItemButton, ListItemIcon, SwipeableDrawer, Box, MenuItem, ListItem, List, ListItemText, Divider, Collapse, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {HistoryMenu, AboutUsModal} from '../'
import React,{useState, useEffect} from 'react'
import { useTheme } from "@mui/material/styles";

export const MenuOption = ({memory, setConversation}) => {
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
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
    }
    const aboutUsPress = () => {
      setModalOpen(true)
    }
    const historyOptionPress = (mem) => {
      setConversation(mem)
      setOpen(false)
    }
    const historyList = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          color="inherit"
        >
          <AboutUsModal open={modalOpen} setOpen={setModalOpen} />
          <List>
              <ListItem >
                <ListItemButton onClick={historyPress} >
                  <ListItemIcon  >
                   <HistoryIcon style={{ color: theme.palette.text.primary }} 
                   />
                  </ListItemIcon>
                  <ListItemText primary={'History'} />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton onClick={aboutUsPress} >
                  <ListItemIcon  >
                   <HelpOutlineOutlinedIcon style={{ color: theme.palette.text.primary }} 
                   />
                  </ListItemIcon>
                  <ListItemText primary={'About Us'} />
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
                </List>
            </Collapse>
          </List>
        </Box>
      );
    return(
      <div>
        <IconButton 
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{}}>   
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer            
                anchor="right"
                variant="temporary"
                color={theme.palette.background.default}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                >
                
                {historyList()}
            </SwipeableDrawer>
      </div>
    )
}
