import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {primary: "#F0F4FA", secondary:"#FFFFFF"},
    text: {primary: '#000000'},   
  },
});

export default lightTheme;