import { render } from 'react-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import NavBar from './components/NavBar'
import SearchParams from './components/SearchParams'
import theme from './GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <SearchParams />
      </CssBaseline>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
