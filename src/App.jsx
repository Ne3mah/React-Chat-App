import { useState } from 'react';
import {  Stack, ThemeProvider } from '@mui/material';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';
import { SideBar } from './layout/SideBar';
import { ChatsList } from './pages/ChatsList';

function App() { 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme= isDarkMode? darkTheme : lightTheme;
  
  const style = {
    backgroundColor : theme.palette.background.primary,
    color:theme.palette.text.primary  
  }

  return (
    <ThemeProvider theme={theme}> 
      <Stack direction="row" style={style}>
        <SideBar onThemeToggle={toggleDarkMode} isDarkMode = {isDarkMode}/>
        <ChatsList/>
      </Stack>      
    </ThemeProvider>
       
            
  )
}

export default App
