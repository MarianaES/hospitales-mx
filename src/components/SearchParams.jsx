import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'

import Hospital from './Hospital'
import Hospitals from '../database/hospitals.json'

function SearchParams(props) {
  const [hospitals, setHospitals] = useState(Hospitals)
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        margin: '4rem',
      }}
    >
      <Box sx={{ gridColumn: '1 / 3' }}>
        {hospitals.map((hospital) => (
          <Hospital hospital={hospital} key={hospital.code} />
        ))}
      </Box>
      <Box sx={{ gridColumn: '3 / 4' }}>
        <Card
          variant="outlined"
          style={{
            borderColor: theme.palette.secondary.light,
          }}
        >
          <CardContent>
            <Box display="flex" flexDirection="row">
              <ManageSearchIcon color="secondary" fontSize="large" />
              <Typography variant="h4" component="div" color="secondary">
                Buscar hospitales
              </Typography>
            </Box>
            <TextField
              id="standard-basic"
              label="Entidad"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Municipio"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Localidad"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Clave de la institución"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Buscar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

export default SearchParams
