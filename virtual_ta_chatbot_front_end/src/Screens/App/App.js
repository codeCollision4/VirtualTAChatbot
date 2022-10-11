import HomeScreen from '../HomeScreen'
import '../../Themes/default/main.scss';

import { useState } from 'react';
import Themes from '../../Themes'

function App() {
  const [themeNumber, setThemeNumber] = useState(0);
  return (
    <Themes themeNumber={themeNumber}  >
      <HomeScreen />
    </Themes>
  );
}

export default App;
