import HomeScreen from '../HomeScreen'
import '../../Themes/default/main.scss';

import { useState } from 'react';
import Themes from '../../Themes'

function App() {
  //Global Theme of app
  const [themeNumber, setThemeNumber] = useState(() => {
    //Gets previous theme
    let currentTheme = localStorage.getItem("currentTheme");
    let initialValue = JSON.parse(currentTheme)
    return parseInt(initialValue) || 0;
  });
  return (
    <Themes themeNumber={themeNumber}  >
      <HomeScreen themeNumber={themeNumber} setThemeNumber={setThemeNumber}  />
    </Themes>
  );
}

export default App;
