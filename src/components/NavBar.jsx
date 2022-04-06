import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStaffAesculapius } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}
