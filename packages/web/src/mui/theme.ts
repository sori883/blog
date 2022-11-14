import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: '#eeeeee',
    },
    text: { 
      primary: '#4e4e4e'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;