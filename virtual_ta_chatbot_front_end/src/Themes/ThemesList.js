import {Theme0, Theme1, Theme2, Theme3} from './Colors'
import { createTheme } from "@mui/material/styles";

const setTheme = (color1, color2, color3, color4) => createTheme({
    palette: {
      primary: {
        main: color1,
      },
      secondary:{
        main: color2
      },
      background: {
        default: color3,
        paper: color3
      },
      text:{
        primary: color4,
      },
    },
    components: {
      MuiToolbar: {
          styleOverrides: {
              dense: {
                  height: 64,
                  minHeight: 64,
              }
          }
      }
    },
  });
const themes = [
    {
      id: 0,
      name: 'Light',
      primaryColor: Theme0.primaryColor,
      secondaryColor: Theme0.secondaryColor,
      backgroundColor: Theme0.backgroundColor,
      textColor: Theme0.textColor,
      theme: setTheme(Theme0.primaryColor, Theme0.secondaryColor, Theme0.backgroundColor, Theme0.textColor),
    },
    {
      id: 1,
      name: 'Dark',
      primaryColor: Theme1.primaryColor,
      secondaryColor: Theme1.secondaryColor,
      backgroundColor: Theme1.backgroundColor,
      textColor: Theme1.textColor,
      theme: setTheme(Theme1.primaryColor, Theme1.secondaryColor, Theme1.backgroundColor, Theme1.textColor),
    },
    {
      id: 2,
      name: 'UTD -  Light',
      primaryColor: Theme2.primaryColor,
      secondaryColor: Theme2.secondaryColor,
      backgroundColor: Theme2.backgroundColor,
      textColor: Theme2.textColor,
      theme: setTheme(Theme2.primaryColor, Theme2.secondaryColor, Theme2.backgroundColor, Theme2.textColor),
    },
    {
      id: 3,
      name: 'UTD - Dark',
      primaryColor: Theme3.primaryColor,
      secondaryColor: Theme3.secondaryColor,
      backgroundColor: Theme3.backgroundColor,
      textColor: Theme3.textColor,
      theme: setTheme(Theme3.primaryColor, Theme3.secondaryColor, Theme3.backgroundColor, Theme3.textColor),
    },
]
export default themes