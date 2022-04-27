import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

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

type Props = {
  children: ReactNode
}
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
})

export const ColorModeContextProvider = (props: Props) => {
  const [mode, setMode] = useState<PaletteMode>('light')

  // useMemo is used to increase performance since this will be in the whole app , avoiding to many re-renders
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode,
    }),
    [mode],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
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
            primary: Colors.primaryLight,
            secondary: Colors.secondaryDark,
            disabled: Colors.gray,
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
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => useContext(ColorModeContext)
