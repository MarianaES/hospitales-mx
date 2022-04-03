import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#dc6f69",
  secondary: "#777aa6",
  success: "#4caf50",
  info: "#2196f3",
  warning: "#ff9800",
  error: "#f44336",

  white: "#fff",
  black: "#000",
  gray: "#5d5c5c",
};

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
  },
  typography: {
    fontFamily: "Lexend Deca",
    fontSize: 14,
    body1: {
      fontFamily: "Nunito",
    },
    body2: {
      fontFamily: "Nunito",
    },
    subtitle1: {
      fontFamily: "Saira",
    },
    subtitle2: {
      fontFamily: "Saira",
    },
    button: {
      fontFamily: "Lexend Deca",
    },
    caption: {
      fontFamily: "Lexend Deca",
    },
    overline: {
      fontFamily: "Lexend Deca",
    },
  },
});

export default theme;
