import {Theme1, Theme2} from './Colors'
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
      name: 'theme1',
      primaryColor: Theme1.primaryColor,
      secondaryColor: Theme1.secondaryColor,
      backgroundColor: Theme1.backgroundColor,
      textColor: Theme1.textColor,
      theme: setTheme(Theme1.primaryColor, Theme1.secondaryColor),
    },
    {
      name: 'theme2',
      primaryColor: Theme2.primaryColor,
      secondaryColor: Theme2.secondaryColor,
      backgroundColor: Theme2.backgroundColor,
      textColor: Theme2.textColor,
      theme: setTheme(Theme2.primaryColor, Theme2.secondaryColor),
    }
]
export default themes