import {Theme0, Theme1, Theme2, Theme3} from './Colors'
import { createTheme } from "@material-ui/core";

const setTheme = (color1, color2) => createTheme({
    palette: {
      primary: {
        main: color1,
      },
      secondary:{
        main: color2
      }
    }
  });
const themes = [
    {
      id: 0,
      name: 'Light',
      primaryColor: Theme0.primaryColor,
      secondaryColor: Theme0.secondaryColor,
      backgroundColor: Theme0.backgroundColor,
      textColor: Theme0.textColor,
      theme: setTheme(Theme0.primaryColor, Theme0.secondaryColor),
    },
    {
      id: 1,
      name: 'Dark',
      primaryColor: Theme1.primaryColor,
      secondaryColor: Theme1.secondaryColor,
      backgroundColor: Theme1.backgroundColor,
      textColor: Theme1.textColor,
      theme: setTheme(Theme1.primaryColor, Theme1.secondaryColor),
    },
    {
      id: 2,
      name: 'UTD -  Light',
      primaryColor: Theme2.primaryColor,
      secondaryColor: Theme2.secondaryColor,
      backgroundColor: Theme2.backgroundColor,
      textColor: Theme2.textColor,
      theme: setTheme(Theme2.primaryColor, Theme2.secondaryColor),
    },
    {
      id: 3,
      name: 'UTD - Dark',
      primaryColor: Theme3.primaryColor,
      secondaryColor: Theme3.secondaryColor,
      backgroundColor: Theme3.backgroundColor,
      textColor: Theme3.textColor,
      theme: setTheme(Theme3.primaryColor, Theme3.secondaryColor),
    },
]
export default themes