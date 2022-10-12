import HomeScreen from '../HomeScreen'
import '../../Themes/default/main.scss';

import { useState } from 'react';
import Themes from '../../Themes'

function App() {
  //Change to use different theme
  const [themeNumber, setThemeNumber] = useState(0);
  return (
    <Themes themeNumber={themeNumber}  >
      <HomeScreen themeNumber={themeNumber} setThemeNumber={setThemeNumber}  />
    </Themes>
  );
}

export default App;
