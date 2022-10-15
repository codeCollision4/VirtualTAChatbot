// import { AppBar, Toolbar } from "@material-ui/core";
import {AppBar} from '@mui/material';
import { Toolbar, Grid, Box, Typography, IconButton, Menu, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeSelector, MenuOption} from './HeaderComponents'
import React from "react";



export const Header = ({title, themeNumber, setThemeNumber, memory, setConversation}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ThemeSelector themeNumber={themeNumber} setThemeNumber={setThemeNumber} />
          <MenuOption memory={memory} setConversation={setConversation} />
        </Toolbar>
      </AppBar>
      </Box>
  );
}