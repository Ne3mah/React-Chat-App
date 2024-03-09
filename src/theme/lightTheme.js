import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {primary: "#fff"},
    text: {primary: '#000000'},   
  },
});

export default lightTheme;