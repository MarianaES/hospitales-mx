import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ColorModeContextProvider } from './lib/context/ColorModeContext'

import NavBar from './components/NavBar'
import SearchParams from './components/SearchParams'

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/hospitals" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ColorModeContextProvider>
  )
}

render(<App />, document.getElementById('root'))
