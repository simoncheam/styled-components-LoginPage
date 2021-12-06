import * as React from 'react';
import { Button } from 'components/common/Button'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';
import { useState, useEffect } from 'react'




const GlobalStyle = createGlobalStyle`

/* this is how we can set paragraph styles */

body{
  //background: white;  - previous version before theme change
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
  font-family: 'Kaushan Script';
}
  
`;

const theme = {
  primaryColor: '#f8049c',
  //primaryColor: 'lime',

  secondaryColor: '#fdd54f'
};

function App() {

  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
      }
    }} >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}>

          </Route>
          <Route path="/" element={<Home />}>

          </Route>


        </Routes>

      </BrowserRouter>

      {/* <h1>
        App
      </h1>

      <Button primary >
        Primary
      </Button>
      <Button secondary >
        Secondary
      </Button>
      <Button disabled large >
        Disabled
      </Button> */}

    </ThemeProvider>
  );
}

export default App;
