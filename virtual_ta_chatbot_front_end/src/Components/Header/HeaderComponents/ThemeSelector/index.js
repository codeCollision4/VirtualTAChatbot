import {Button, ButtonGroup, Box, Menu, MenuItem, IconButton} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import PaletteIcon from '@mui/icons-material/PaletteOutlined';
import React, {useState} from "react";
import themes from 'Themes/ThemesList'


export const ThemeSelector = ({title, themeNumber, setThemeNumber}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        const { myValue } = event.currentTarget.dataset;
        setAnchorEl(event.currentTarget);
        if (myValue != undefined) {
          setAnchorEl(null)
          setThemeNumber(myValue)
          localStorage.setItem("currentTheme", myValue);
        }
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
      ];
    return (
        <Box sx={{paddingRight:2}}>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <PaletteIcon />
          </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              {themes.map((theme, index) => 
                <MenuItem key={theme.id} data-my-value={theme.id} disabled={theme.id==themeNumber} onClick={handleMenu}>{theme.name}</MenuItem>
              )}
        </Menu>
        </Box>
      );
}
