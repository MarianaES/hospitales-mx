import { useState } from 'react'
import { useFormik } from 'formik'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'

import CODES from '../lib/constants/CODES.json'
import MUNICIPALITIES from '../lib/constants/MUNICIPALITIES.json'
import STATES from '../lib/constants/STATES.json'
import UNITS from '../lib/constants/UNITS.json'
import Hospitals from '../database/short.json'

import Hospital from './Hospital'

function SearchParams() {
  const [hospitals] = useState(Hospitals)
  const theme = useTheme()

  const formik = useFormik({
    initialValues: {
      address: {
        state: '',
        municipality: '',
      },
      institution: {
        code: '',
        type: '',
      },
    },
    onSubmit(values) {
      console.log({ values })
    },
  })

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
        <Box display="flex" flexDirection="row">
          <ManageSearchIcon color="secondary" fontSize="large" />
          <Typography variant="h4" component="div" color="secondary">
            Buscar hospitales
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Card
            variant="outlined"
            style={{
              borderColor: theme.palette.secondary.light,
            }}
          >
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="address-state-label">Estado</InputLabel>
                <Select
                  {...formik.getFieldProps('address.state')}
                  labelId="address-state-label"
                  id="address-state"
                  label="Estado"
                  error={
                    Boolean(formik.touched?.['address.state']) &&
                    Boolean(formik.errors?.['address.state'])
                  }
                >
                  {STATES.map((state, index) => (
                    <MenuItem value={state.value} key={index}>
                      {state.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="address-municipality-label">
                  Municipio
                </InputLabel>
                <Select
                  {...formik.getFieldProps('address.municipality')}
                  labelId="address-municipality-label"
                  id="address-municipality"
                  label="Municipio"
                  error={
                    Boolean(formik.touched?.['address.municipality']) &&
                    Boolean(formik.errors?.['address.municipality'])
                  }
                >
                  {MUNICIPALITIES.map((municipality, index) => (
                    <MenuItem value={municipality.value} key={index}>
                      {municipality.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="institution-code-label">Institución</InputLabel>
                <Select
                  {...formik.getFieldProps('institution.code')}
                  labelId="institution-code-label"
                  id="institution-code"
                  label="Institución"
                  error={
                    Boolean(formik.touched?.['institution.code']) &&
                    Boolean(formik.errors?.['institution.code'])
                  }
                >
                  {CODES.map((code, index) => (
                    <MenuItem value={code.short} key={index}>
                      {code.short}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="institution-type-label">Tipo</InputLabel>
                <Select
                  {...formik.getFieldProps('institution.type')}
                  labelId="institution-type-label"
                  id="institution-type"
                  label="Tipo"
                  error={
                    Boolean(formik.touched?.['institution.type']) &&
                    Boolean(formik.errors?.['institution.type'])
                  }
                >
                  {UNITS.map((unit, index) => (
                    <MenuItem value={unit.value} key={index}>
                      {unit.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
              >
                Buscar
              </Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Box>
  )
}

export default SearchParams
