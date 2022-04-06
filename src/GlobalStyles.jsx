import { createTheme } from '@mui/material/styles'

const Colors = {
  primary: '#dc6f69',
  primaryLight: '#e38b87',
  primaryDark: '#9a4d49',
  secondary: '#777aa6',
  secondaryLight: '#9294b7',
  secondaryDark: '#535574',
  success: '#4caf50',
  info: '#2196f3',
  warning: '#ff9800',
  error: '#f44336',

  white: '#fff',
  black: '#000',
  gray: '#5d5c5c',
}

const theme = createTheme({
  palette: {
    type: 'light',
    // background: {
    //   default: Colors.primaryDark,
    // },
    primary: {
      main: Colors.primary,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
    },
    error: {
      main: Colors.error,
    },
    text: {
      white: Colors.white,
      black: Colors.black,
      gray: Colors.gray,
    },
  },
  typography: {
    fontFamily: 'Lexend Deca',
    fontSize: 14,
    body1: {
      fontFamily: 'Nunito',
    },
    body2: {
      fontFamily: 'Nunito',
    },
    subtitle1: {
      fontFamily: 'Saira',
    },
    subtitle2: {
      fontFamily: 'Saira',
    },
    button: {
      fontFamily: 'Lexend Deca',
    },
    caption: {
      fontFamily: 'Lexend Deca',
    },
    overline: {
      fontFamily: 'Lexend Deca',
    },
  },
})

export default theme
