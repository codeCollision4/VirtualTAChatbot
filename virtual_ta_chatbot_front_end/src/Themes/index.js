import { useState, useEffect } from 'react';
import themes from './ThemesList'
import { createTheme, ThemeProvider } from "@material-ui/core";

const Themes = (props) => {
    // console.log(themes[props.themeNumber])
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
        root.style.setProperty(
            'number', 0,//themes[props.themeNumber].isDark,
        );
        // root.style.setProperty(
        //     '--color', themes[props.themeNumber].textColor,
        // );
        // root.style.setProperty(
        //     '--secondary_color', themes[props.themeNumber].secondary_color
        // );
      }, [props.themeNumber]);

    // console.log("props",props)
    const theme = themes[props.themeNumber].theme
    return(
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
export default Themes