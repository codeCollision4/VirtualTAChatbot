// import { AppBar, Toolbar } from "@material-ui/core";
import {AppBar, Toolbar} from '@material-ui/core';
import React from "react";



export const Header = ({title}) => {
  return (
    <AppBar color="secondary">
          <Toolbar>{title}</Toolbar>
      </AppBar>
  );
}