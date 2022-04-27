import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStaffAesculapius } from '@fortawesome/free-solid-svg-icons'
import { useColorMode } from '../lib/context/ColorModeContext'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function NavBar() {
  const theme = useTheme()
  const colorMode = useColorMode()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FontAwesomeIcon icon={faStaffAesculapius} size="3x" />
          <Typography
            variant="h4"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hospitales en México
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
