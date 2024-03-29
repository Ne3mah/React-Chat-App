import { createTheme } from '@mui/material/styles';

const darkTheme  = createTheme({
  palette: {
    mode: 'dark',
    background: {primary: "#212B36" , secondary: "#161C24"},
    text: {primary: '#ffffff'},
  }
});

export default darkTheme;