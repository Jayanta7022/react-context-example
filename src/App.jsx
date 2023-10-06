 import {createContext,useContext, useState } from 'react'

import "./App.css";
import Form from './component/form';

const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(0)
  

  return (
    <>
    <themeContext.Provider value='dark'>
      <Form/>
    </themeContext.Provider>
    </>
  );
}

export default App;
