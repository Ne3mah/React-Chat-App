import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {primary: "#F0F4FA", secondary:"#F8FAFF", paper:"#FFFFFF", main : "#EAF2FE"},
    text: {primary: '#000000' , secondary : '#676667', main : "#709CE6"},   
  },
});

export default lightTheme;