// import { AppBar, Toolbar } from "@material-ui/core";
import {AppBar} from '@material-ui/core';
import { Toolbar, Grid, Box, Typography, IconButton, Menu, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeSelector} from 'Components'
import React from "react";



export const Header = ({title, themeNumber, setThemeNumber}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ThemeSelector themeNumber={themeNumber} setThemeNumber={setThemeNumber} />
        </Toolbar>
      </AppBar>
      </Box>
  );
}