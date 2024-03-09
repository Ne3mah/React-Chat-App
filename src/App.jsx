import { SideBar } from './components/SideBar';
import { useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';

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
      <Box style={style}>
        <SideBar onThemeToggle={toggleDarkMode} isDarkMode = {isDarkMode}/>
      </Box>      
    </ThemeProvider>
       
            
  )
}

export default App
