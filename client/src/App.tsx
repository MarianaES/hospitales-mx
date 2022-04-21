import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import NavBar from './components/NavBar'
import SearchParams from './components/SearchParams'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/hospitals" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
