import { AppBar, Toolbar, Grid, Box, Typography, IconButton, Menu, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeSelector, MenuOption, SidebarButton} from './HeaderComponents'
import React from "react";



export const Header = ({title, themeNumber, setThemeNumber, memory, setConversation, setSidebarVisible, sidebarVisible}) => {
  return (
    <AppBar position="static" >
        <Toolbar variant="dense">
          <SidebarButton setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible}  />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ThemeSelector themeNumber={themeNumber} setThemeNumber={setThemeNumber} />
          <MenuOption memory={memory} setConversation={setConversation} />
        </Toolbar>
      </AppBar>
  );
}