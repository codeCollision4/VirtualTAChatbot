import { useState, useEffect } from 'react';
import themes from './ThemesList'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Themes = (props,) => {
    //This will set the chat ui kit to change it's color
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty(
          '--primary_color', themes[props.themeNumber].primaryColor,
        );
        root.style.setProperty(
            '--secondary_color', themes[props.themeNumber].secondaryColor,
        );
        root.style.setProperty(
            '--background_color', themes[props.themeNumber].backgroundColor,
        );
        root.style.setProperty(
            '--text_color', themes[props.themeNumber].textColor,
            // '--text_color', themes[props.themeNumber].textColor,
        );
      }, [props.themeNumber]);

    const theme = themes[props.themeNumber].theme
    return(
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
export default Themes