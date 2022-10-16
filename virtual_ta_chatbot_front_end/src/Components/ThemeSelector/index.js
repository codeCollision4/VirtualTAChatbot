// import {useRadioGroup, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel   } from '@material-ui/core';
import {Button, ButtonGroup, Box, Menu, MenuItem, IconButton} from '@material-ui/core';
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
          setThemeNumber(myValue)
          setAnchorEl(null)
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
        <Box>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <PaletteIcon color="" />
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
                <MenuItem data-my-value={theme.id} disabled={theme.id==themeNumber} onClick={handleMenu}>{theme.name}</MenuItem>
              )}
        </Menu>
        </Box>
        // <Box
        // style={{}}
        //   sx={{
        //     display: 'flex',
        //     '& > *': {
        //       m: 1,
        //     },
        //   }}
        // >
        //   <ButtonGroup
        //     orientation="horizontal"
        //     aria-label="vertical outlined button group"
        //   >
        //     {buttons}
        //   </ButtonGroup>
        // </Box>
      );
}
/*
<FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
*/