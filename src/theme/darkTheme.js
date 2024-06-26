import { createTheme } from '@mui/material/styles';

const darkTheme  = createTheme({
  palette: {
    mode: 'dark',
    background: {primary: "#212B36" , secondary: "#212B36", paper:"#161C24", main: "#161C24"},
    text: {primary: '#ffffff' , secondary : '#676667'},
  }
});

export default darkTheme;