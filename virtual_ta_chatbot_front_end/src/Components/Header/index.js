// import { AppBar, Toolbar } from "@material-ui/core";
import {AppBar, Toolbar} from '@mui/material/';
import React from "react";

export const Header = ({title}) => {
  return (
    <header style={{flex:1}} >
      <AppBar>
            <Toolbar>{title}</Toolbar>
        </AppBar>
    </header>
  );
}